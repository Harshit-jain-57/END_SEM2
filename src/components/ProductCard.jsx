import React, { useState, useRef, useEffect } from 'react'
import './ProductCard.css'
import QuickViewModal from './QuickViewModal'

const ProductCard = ({ product, index ,setSearchBar}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [inView, setInView] = useState(false)
  const [showQuickView, setShowQuickView] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleQuickView = (e) => {
    e.stopPropagation()
    setShowQuickView(true)
    setSearchBar(false)
  }

  return (
    <>
      <div
        ref={ref}
        className={`product-card ${inView ? 'in-view' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ transitionDelay: `${index * 0.1}s` }}
      >
        <div className="product-image-container">
          <img 
            src={isHovered ? product.hoverImage : product.image} 
            alt={product.name} 
            className="product-image"
          />
          <div className={`product-overlay ${isHovered ? 'visible' : ''}`}>
            <button className="quick-view-btn" onClick={handleQuickView}>Quick View</button>
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
      {showQuickView && (
        <QuickViewModal 
          product={{
            ...product,
            images: [product.image, product.hoverImage]
          }}
          onClose={() => {
            setShowQuickView(false)
            setSearchBar(true)
          }}
        />
      )}
    </>
  )
}

export default ProductCard 