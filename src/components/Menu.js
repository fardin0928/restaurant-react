import React, { useContext, useState } from "react";
import { CartContext } from "../content/CartContext";

const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const [addedItem, setAddedItem] = useState(null);

  const items = [
    {
      name: "Classic Burger",
      desc: "Beef patty, cheddar cheese, house sauce",
      price: 8.99,
      img: process.env.PUBLIC_URL + "/assets/burger.webp"
    },
    {
      name: "Cheese Fries",
      desc: "Crispy fries topped with cheddar & jalapeño",
      price: 4.99,
      img: process.env.PUBLIC_URL + "/assets/fries.jpg"
    },
    {
      name: "Buffalo Wings",
      desc: "6pc wings served with ranch & celery",
      price: 7.49,
      img: process.env.PUBLIC_URL + "/assets/wings.jpg"
    },
    {
      name: "Chicken Sandwich",
      desc: "Crispy buttermilk chicken, lettuce, tomato",
      price: 9.49,
      img: process.env.PUBLIC_URL + "/assets/chicken-sandwich.webp"
    },
    {
      name: "Vanilla Shake",
      desc: "Thick & creamy vanilla ice cream blend",
      price: 5.99,
      img: process.env.PUBLIC_URL + "/assets/shake.jpg"
    },
    {
      name: "Garden Salad",
      desc: "Fresh greens, tomato, cucumber, vinaigrette",
      price: 6.99,
      img: process.env.PUBLIC_URL + "/assets/salad.jpg"
    }
  ];

  const handleAdd = (item) => {
    addToCart(item);
    setAddedItem(item.name);
    setTimeout(() => setAddedItem(null), 300);
  };

  return (
    <div className="menu-page container">
      <h2 className="menu-title">Menu</h2>
      <p className="menu-subtext">
        Pick your favorite — all made fresh to order.
      </p>

      <div className="menu-grid">
        {items.map((item) => (
          <div className="menu-card" key={item.name}>
            <img src={item.img} alt={item.name} className="menu-img" />

            <div className="menu-card-body">
              <h3>{item.name}</h3>
              <p className="menu-desc">{item.desc}</p>
              <p className="menu-price">${item.price}</p>

              <button
                className={`menu-btn ${addedItem === item.name ? "added" : ""}`}
                onClick={() => handleAdd(item)}
              >
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
