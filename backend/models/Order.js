import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        name: String,
        price: Number,
        desc: String,
        img: String,
      }
    ],
    total: { type: Number, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);

