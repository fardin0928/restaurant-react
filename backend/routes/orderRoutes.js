import express from "express";
import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

const router = express.Router();

// POST place order (save order + clear cart)
router.post("/", async (req, res) => {
  try {
    const { clientId, items, total } = req.body;

    if (!clientId || !items?.length) {
      return res.status(400).json({ message: "Missing order data" });
    }

    const order = await Order.create({ clientId, items, total });

    // clear persisted cart
    await Cart.findOneAndDelete({ clientId });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: "Order failed", error: err.message });
  }
});

export default router;
