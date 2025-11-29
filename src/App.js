import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import CartSidebar from "./components/CartSidebar";

import Home from "./components/Home";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";

import { CartProvider } from "./content/CartContext";

// Component to control where the cart appears
const PageLayout = ({ cartOpen, setCartOpen }) => {
  const location = useLocation();
  const showCart = location.pathname === "/menu"; // Cart ONLY on menu page

  return (
    <>
      <Header onCartOpen={() => showCart && setCartOpen(true)} />

      {showCart && (
        <CartSidebar
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
        />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <Router>
      <CartProvider>
        <PageLayout cartOpen={cartOpen} setCartOpen={setCartOpen} />
      </CartProvider>
    </Router>
  );
}

export default App;
