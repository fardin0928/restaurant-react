import express from "express";
import Cart from "../models/Cart.js";

const router = express.Router();

// GET cart by clientId
router.get("/:clientId", async (req, res) => {
  const { clientId } = req.params;
  const cart = await Cart.findOne({ clientId });
  res.json(cart || { clientId, items: [] });
});

// PUT replace cart items (persist cart updates)
router.put("/:clientId", async (req, res) => {
  const { clientId } = req.params;
  const { items } = req.body;

  const cart = await Cart.findOneAndUpdate(
    { clientId },
    { clientId, items: items || [] },
    { upsert: true, new: true }
  );

  res.json(cart);
});

// DELETE clear cart
router.delete("/:clientId", async (req, res) => {
  const { clientId } = req.params;
  await Cart.findOneAndDelete({ clientId });
  res.json({ ok: true });
});

export default router;
