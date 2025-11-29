import React, { useContext } from "react";
import { CartContext } from "../content/CartContext";
import "./CartSidebar.css";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart, total } = useContext(CartContext);

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
            <span>${item.price}</span>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}

      <p className="cart-total">Total: ${total.toFixed(2)}</p>

      {cart.length > 0 && (
        <button className="clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default CartSidebar;
