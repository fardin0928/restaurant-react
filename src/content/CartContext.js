import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://YOUR-BACKEND-URL/api"
    : "http://localhost:5000/api";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 🔄 Load cart from database
  useEffect(() => {
    fetch(`${API_URL}/cart`)
      .then((res) => res.json())
      .then((data) => setCart(data))
      .catch((err) => console.error("Cart load error:", err));
  }, []);

  // ➕ Add item
  const addToCart = async (item) => {
    setCart((prev) => [...prev, item]);

    await fetch(`${API_URL}/cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
  };

  // ➖ Remove item
  const removeFromCart = async (index) => {
    const item = cart[index];
    setCart((prev) => prev.filter((_, i) => i !== index));

    await fetch(`${API_URL}/cart/${item._id}`, {
      method: "DELETE",
    });
  };

  // 🧹 Clear cart
  const clearCart = async () => {
    setCart([]);
    await fetch(`${API_URL}/cart`, { method: "DELETE" });
  };

  // 🧾 Place order
  const placeOrder = async () => {
    await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart, total }),
    });

    await clearCart();
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        placeOrder,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
