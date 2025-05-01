import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Our Store</h3>
                    <p>Discover our exquisite collection of handcrafted sarees, where tradition meets contemporary design. Visit our store for a personalized shopping experience.</p>
                    <div className="store-info">
                        <p><strong>Store Hours:</strong></p>
                        <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                        <p>Sunday: 11:00 AM - 6:00 PM</p>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#new-arrivals">New Arrivals</a></li>
                        <li><a href="#best-sellers">Best Sellers</a></li>
                        <li><a href="#silk-sarees">Silk Sarees</a></li>
                        <li><a href="#wedding-collection">Wedding Collection</a></li>
                        <li><a href="#appointments">Book Appointment</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p><i className="fas fa-map-marker-alt"></i> 123 Fashion Street, Shopping District</p>
                    <p><i className="fas fa-phone"></i> +91 98765 43210</p>
                    <p><i className="fas fa-envelope"></i> info@sareestore.com</p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                        <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Saree Store. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer; 