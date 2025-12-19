import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../content/CartContext";

const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/menu")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Menu fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p style={{ padding: "40px" }}>Loading menu...</p>;
  }

  return (
    <div className="menu-page container">
      <h2 className="menu-title">Menu</h2>
      <p className="menu-subtext">
        Pick your favorite — all made fresh to order.
      </p>

      <div className="menu-grid">
        {items.map((item) => (
          <div className="menu-card" key={item._id}>
            <img
              src={process.env.PUBLIC_URL + item.img}
              alt={item.name}
            />

            <div className="menu-card-body">
              <h3>{item.name}</h3>
              <p className="menu-desc">{item.desc}</p>
              <p className="menu-price">${item.price}</p>

              <button className="menu-btn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
