const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    mobile: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: "user"
    },
    isBlocked: {
      type: Boolean,
      default: false
    },
    cart: {
      type: Array,
      default: []
    },
    address: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
      }
    ],
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      }
    ],
    refreshToken: {
      type: String
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", UserSchema);