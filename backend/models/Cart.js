import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    clientId: { type: String, required: true, unique: true },
    items: [
      {
        name: String,
        desc: String,
        price: Number,
        img: String,
        qty: { type: Number, default: 1 }
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
