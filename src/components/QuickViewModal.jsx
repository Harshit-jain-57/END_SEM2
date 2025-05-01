import React, { useState } from 'react';
import './QuickViewModal.css';

const QuickViewModal = ({ product, onClose }) => {
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0) setQuantity(value);
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const handleImageSelect = (index) => {
        setSelectedImage(index);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>
                
                <div className="modal-grid">
                    <div className="product-gallery">
                        <div className="main-image">
                            <img src={product.images[selectedImage]} alt={product.name} />
                        </div>
                        <div className="thumbnail-container">
                            {product.images.map((image, index) => (
                                <div 
                                    key={index}
                                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                    onClick={() => handleImageSelect(index)}
                                >
                                    <img src={image} alt={`${product.name} - View ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="product-details">
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-description">{product.description}</p>
                        
                        <div className="price-container">
                            <span className="current-price">₹{product.price.toLocaleString()}</span>
                            {product.originalPrice && (
                                <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                            )}
                        </div>

                        <div className="color-selection">
                            <h3>Color Palette</h3>
                            <div className="color-options">
                                {product.colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => handleColorSelect(color)}
                                        title={`Color ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="quantity-selector">
                            <h3>Quantity</h3>
                            <div className="quantity-controls">
                                <button 
                                    className="quantity-btn"
                                    onClick={() => setQuantity(prev => Math.max(0, prev - 1))}
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={handleQuantityChange}
                                    min="1"
                                />
                                <button 
                                    className="quantity-btn"
                                    onClick={() => setQuantity(prev => prev + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className="product-actions">
                            <button className="add-to-cart-btn">
                                <i className="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                            <button className="buy-now-btn">
                                Buy Now
                            </button>
                        </div>

                        <div className="product-meta">
                            <div className="meta-item">
                                <i className="fas fa-truck"></i>
                                <span>Free Shipping on orders above ₹5000</span>
                            </div>
                            <div className="meta-item">
                                <i className="fas fa-undo"></i>
                                <span>7 Days Return Policy</span>
                            </div>
                            <div className="meta-item">
                                <i className="fas fa-shield-alt"></i>
                                <span>Secure Payment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal; 