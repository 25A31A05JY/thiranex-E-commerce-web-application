import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <h1 className="title">E-Commerce Web Application</h1>

      <div className="products">
        <ProductCard
          name="Laptop"
          price="50000"
        />

        <ProductCard
          name="Smartphone"
          price="20000"
        />

        <ProductCard
          name="Headphones"
          price="3000"
        />
      </div>

      <Cart />

      <Footer />
    </div>
  );
}

export default App;
