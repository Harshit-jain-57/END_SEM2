import React, { useState, useEffect, useRef } from 'react'
import image from '../assets/group-saree.jpg'
import image5 from "../assets/Mokshaa7226.png"
import image6 from "../assets/Pro-CaptureOne4003.webp"
import image7 from "../assets/red-group.png"
import image8 from "../assets/horse-saree1.png"
import './Slider2.css'

const Slider2 = () => {
    const images = [image8,image7, image, image6, image5]
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const intervalRef = useRef(null)

    const slideTexts = [
        {
            title: "Welcome to Our Collection",
            description: "Discover the perfect blend of tradition and modernity"
        },
        {
            title: "Elegance Redefined",
            description: "Experience the finest in ethnic fashion"
        },
        {
            title: "Timeless Fashion",
            description: "Where every piece tells a story"
        },
        {
            title: "Style Perfected",
            description: "Your journey to elegance begins here"
        },
        {
            title: "Style Perfected",
            description: "Your journey to elegance begins here"
        },
    ]

    const startInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }
        intervalRef.current = setInterval(() => {
            setIsAnimating(true)
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
                setIsAnimating(false)
            }, 500)
        }, 5000)
    }

    // Auto slide functionality
    useEffect(() => {
        startInterval()
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [images.length])

    const goToPrevious = () => {
        setIsAnimating(true)
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
            setIsAnimating(false)
            startInterval() // Reset interval after manual navigation
        }, 500)
    }

    const goToNext = () => {
        setIsAnimating(true)
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
            setIsAnimating(false)
            startInterval() // Reset interval after manual navigation
        }, 500)
    }

    const goToSlide = (index) => {
        setIsAnimating(true)
        setTimeout(() => {
            setCurrentIndex(index)
            setIsAnimating(false)
            startInterval() // Reset interval after manual navigation
        }, 500)
    }

    return (
        <div className='slider-container'>
            <div className='slider-wrapper'>
                <div className='slider-image'>
                    <img src={images[currentIndex]} alt={`Slider Image ${currentIndex}`} />
                    <div className='glass-overlay'></div>
                    <div className={`slider-content ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                        <h1 className='slide-title'>{slideTexts[currentIndex].title}</h1>
                        <p className='slide-description'>{slideTexts[currentIndex].description}</p>
                        <button className='explore-btn'>Explore Now</button>
                    </div>
                </div>
                
                {/* Navigation arrows */}
                <button className='slider-arrow left-arrow' onClick={goToPrevious}>
                    ❮
                </button>
                <button className='slider-arrow right-arrow' onClick={goToNext}>
                    ❯
                </button>

                {/* Dots navigation */}
                <div className='dots-container'>
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider2