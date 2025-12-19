import React, { useContext } from "react";
import { CartContext } from "../content/CartContext";
import "./CartSidebar.css";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart, total } = useContext(CartContext);

  const placeOrder = async () => {
    if (cart.length === 0) return;

    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientId: "guest-123", // required by backend
          items: cart.map(item => ({
            name: item.name,
            price: item.price,
            qty: item.qty || 1,
          })),
          total: total,
        }),
      });

      if (!res.ok) {
        throw new Error("Order failed");
      }

      clearCart();
      alert("Order placed successfully!");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to place order");
    }
  };

  return (
    <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>✖</button>

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <p>{item.name}</p>
            <span>${item.price.toFixed(2)}</span>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}

      <p className="cart-total">Total: ${total.toFixed(2)}</p>

      {cart.length > 0 && (
        <>
          <button className="checkout-btn" onClick={placeOrder}>
            Place Order
          </button>

          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
