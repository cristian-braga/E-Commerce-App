const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (request, response, next) => {
  let token;

  if (request?.headers?.authorization?.startsWith("Bearer")) {
    token = request.headers.authorization.split(" ")[1];

    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        request.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Não autorizado. Faça o login novamente.");
    }
  } else {
    throw new Error("Token não encontrado.")
  }
});

const isAdmin = asyncHandler(async (request, response, next) => {
  const { email } = request.user;
  const adminUser = await User.findOne(email);

  if (adminUser.role !== "admin") {
    throw new Error("Você não tem permissão!");
  } else {
    next();
  }
});

module.exports = { authMiddleware, isAdmin };