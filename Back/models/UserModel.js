const { default: mongoose } = require("mongoose");
const crypto = require("crypto");

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
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date
  },
  {
    timestamps: true
  }
);

UserSchema.methods.createPasswordResetToken = async function() {
  const resettoken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto.createHash("sha256").update(resettoken).digest("hex");
  this.passwordResetExpires = Date.now() + 30 * 60 * 1000;

  return resettoken;
}

module.exports = mongoose.model("User", UserSchema);