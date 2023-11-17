const express = require("express");
const router = express.Router();

const {
  createUser,
  loginUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser
} = require("../controller/UserController");

const {
  authMiddleware,
  isAdmin
} = require("../middlewares/authMiddleware");

router.post("/register", createUser);

router.post("/login", loginUser);

router.get("/all-users", getAllUsers);

router.get("/:id", authMiddleware, isAdmin, getUser);

router.delete("/:id", deleteUser);

router.put("/edit-user", authMiddleware, updateUser);

router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);

router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;