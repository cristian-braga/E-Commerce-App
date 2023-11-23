const User = require("../models/UserModel");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");
const { generateRefreshToken } = require("../config/refreshToken");
const validateMongoDbId = require("../utils/validateMongodbId");
const jwt = require("jsonwebtoken");

const createUser = asyncHandler(async (request, response) => {
  const email = request.body.email;

  const findUser = await User.findOne({ email: email });

  if (!findUser) {
    const newUser = await User.create(request.body);
    response.json(newUser);
  } else {
    throw new Error("Usuário já existe!");
  }
});

const loginUser = asyncHandler(async (request, response) => {
  const { email, password } = request.body;

  const findUser = await User.findOne({ email });

  if (findUser) {
    const refreshToken = await generateRefreshToken(findUser?._id);

    const updateUser = await User.findByIdAndUpdate(findUser.id,
      {
        refreshToken: refreshToken
      },
      {
        new: true
      }
    );

    response.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000
    });

    response.json(
      {
        _id: findUser?._id,
        firstName: findUser?.firstName,
        lastName: findUser?.lastName,
        email: findUser?.email,
        mobile: findUser?.mobile,
        token: generateToken(findUser?._id)
      }
    );
  } else {
    throw new Error("Usuário inválido!")
  }
});

const getAllUsers = asyncHandler(async (request, response) => {
  try {
    const getUsers = await User.find();
    response.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});

const getUser = asyncHandler(async (request, response) => {
  const { id } = request.params;

  validateMongoDbId(id);

  try {
    const user = await User.findById(id);
    response.json(user);
  } catch (error) {
    throw new Error(error);
  }
});

const updateUser = asyncHandler(async (request, response) => {
  const { _id } = request.user;

  validateMongoDbId(_id);

  try {
    const user = await User.findByIdAndUpdate(_id,
      {
        firstName: request?.body?.firstName,
        lastName: request?.body?.lastName,
        email: request?.body?.email,
        mobile: request?.body?.mobile
      },
      {
        new: true
      }
    );
    response.json(user);
  } catch (error) {
    throw new Error(error);
  }
});

const handleRefreshToken = asyncHandler(async (request, response) => {
  const cookie = request.cookies;

  if (!cookie?.refreshToken) throw new Error("Não há novo token nos cookies");

  const refreshToken = cookie.refreshToken;
  
  const user = await User.findOne({ refreshToken });

  if (!user) throw new Error("Não encontrado");

  jwt.verify(refreshToken, process.env.JWT_SECRET, (error, decoded) => {
    if (error || user.id !== decoded.id) {
      throw new Error("Há algum problema com o token");
    }

    const accessToken = generateToken(user?._id);
  });

  response.json({ accessToken });
});

const logout = asyncHandler(async (request, response) => {
  const cookie = request.cookies;

  if (!cookie?.refreshToken) throw new Error("Não há novo token nos cookies");

  const refreshToken = cookie.refreshToken;
  
  const user = await User.findOne({ refreshToken });

  if (!user) {
    response.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true
    });

    return response.sendStatus(204);
  }

  await User.findOneAndUpdate(refreshToken, {
    refreshToken: ""
  });

  response.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true
  });

  response.sendStatus(204);
});

const deleteUser = asyncHandler(async (request, response) => {
  const { id } = request.params;

  validateMongoDbId(id);

  try {
    const user = await User.findByIdAndDelete(id);
    response.json(user);
  } catch (error) {
    throw new Error(error);
  }
});

const blockUser = asyncHandler(async (request, response) => {
  const { id } = request.params;

  validateMongoDbId(id);

  try {
    const block = await User.findByIdAndUpdate(id,
      {
        isBlocked: true
      },
      {
        new: true
      }
    );
    response.json({
      message: "Usuário bloqueado"
    });
  } catch (error) {
    throw new Error(error);
  }
});

const unblockUser = asyncHandler(async (request, response) => {
  const { id } = request.params;

  validateMongoDbId(id);

  try {
    const unblock = await User.findByIdAndUpdate(id,
      {
        isBlocked: false
      },
      {
        new: true
      }
    );
    response.json({
      message: "Usuário desbloqueado"
    });
  } catch (error) {
    throw new Error(error);
  }
});

const updatePassword = asyncHandler(async (request, response) => {
  const { _id } = request.user;
  const password = request.body;

  validateMongoDbId(_id);

  const user = await User.findById(_id);

  if (password) {
    user.password = password;

    const updatedPassword = await User.save();

    response.json(updatedPassword);
  }
})

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword
};