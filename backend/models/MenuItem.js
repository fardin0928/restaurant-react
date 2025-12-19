import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true } // "/assets/burger.webp"
  },
  { timestamps: true }
);

// 👇 FORCE collection name
export default mongoose.model(
  "MenuItem",
  menuItemSchema,
  "menuitems"
);
