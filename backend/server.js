import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import menuRoutes from "./routes/menuRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// CORS (allow GitHub Pages + local dev)
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      process.env.FRONTEND_URL, // https://fardin0928.github.io
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: false,
  })
);

app.get("/", (req, res) => res.send("API running ✅"));

app.use("/api/menu", menuRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ✅");
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch((err) => console.error("Mongo error:", err));
