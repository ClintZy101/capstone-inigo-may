const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    { productId: { type: mongoose.Schema.Types.ObjectId, required: true } },
  ],
});

module.exports = mongoose.model("Wishlist", wishlistSchema);