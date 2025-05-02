import React from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";
import saree1 from "../assets/saree1.webp";
import saree1h from "../assets/saree1h.webp";
import saree2 from "../assets/saree2.webp";
import saree2h from "../assets/saree2h.webp";
import saree3 from "../assets/saree3.webp";
import saree3h from "../assets/saree3h.webp";
import saree4 from "../assets/saree4.webp";
import saree4h from "../assets/saree4h.webp";
import saree5 from "../assets/saree5.webp";
import saree5h from "../assets/saree5h.webp";
import saree6 from "../assets/saree6.webp";
import saree6h from "../assets/saree6h.webp";
const ProductGrid = () => {
  // Sample product data - replace with your actual data
  const products = [
    {
      id: 1,
      name: "Torquise Blue Silk Saree",
      description:
        "Hand-woven pure silk saree with intricate traditional designs",
      price: 85999,
      originalPrice: 99999,
      image: saree1,
      hoverImage: saree1h,
      colors: ["#41A594", "#E7DE95", "#B1BF90"],
    },
    {
      id: 2,
      name: "Banarasi Silk Saree",
      description:
        "Classic Banarasi silk with rich zari work and timeless appeal",
      price: 95999,
      originalPrice: 129999,
      image: saree2,
      hoverImage: saree2h,
      colors: ["#656160", "#CDA994", "#010300"],
    },
    {
      id: 3,
      name: "Kanchipuram Regal Drape",
      description: "Timeless Kanchipuram weave in deep burgundy tone",
      price: 99999,
      originalPrice: 119999,
      image: saree3,
      hoverImage: saree3h,
      colors: ["#822F34", "#C58B6D", "#A96D30"],
    },
    {
      id: 4,
      name: "Midnight Banarasi Classic",
      description: "Bold black Banarasi saree with a modern white border",
      price: 109999,
      originalPrice: 119999,
      image: saree4,
      hoverImage: saree4h,
      colors: ["#F9EECF", "#070703", "#E1AF87"],
    },
    {
      id: 5,
      name: "Mustard Rouge Banarasi",
      description: "Mustard-red Kora Banarasi with rich zari detailing",
      price: 108999,
      image: saree5,
      hoverImage: saree5h,
      colors: ["#D69351", "#9B0706", "#F5AD89"],
    },
    {
      id: 6,
      name: "Blush Gold Kanchipuram",
      description: "Striped pink Kanchipuram silk with rich golden border",
      price: 88999,
      image: saree6,
      hoverImage: saree6h,
      colors: ["#F6D19E", "#D32A55", "#D9B15C"],
    },
    // Add more products as needed
  ];

  return (
    <section className="products-section">
      <div className="container">
        <h2 className="section-title">Our Collection</h2>
        <p className="section-description">
          Discover our exquisite range of handcrafted sarees
        </p>
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
