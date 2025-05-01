import React, { useState } from 'react'
import './ProductCard.css'

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div 
            className="product-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="product-image-container">
                <img 
                    src={isHovered ? product.hoverImage : product.image} 
                    alt={product.name} 
                    className="product-image"
                />
                <div className={`product-overlay ${isHovered ? 'visible' : ''}`}>
                    <button className="quick-view-btn">Quick View</button>
                </div>
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price-container">
                    <span className="product-price">₹{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                        <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                    )}
                </div>
                <div className="product-colors">
                    {product.colors?.map((color, index) => (
                        <div 
                            key={index}
                            className="color-dot"
                            style={{ backgroundColor: color }}
                            title={`${color}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductCard 