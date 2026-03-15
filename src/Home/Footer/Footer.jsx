import React from "react"
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">

      <div className="container">
        <div className="row gy-4">

          {/* Brand Section */}

          <div className="col-12 col-md-6 col-lg-3">
            
            <h1>MobileHub</h1>

            <p className="footer-text">
              MobileHub is a modern mobile e-commerce platform where you can
              explore the latest smartphones from trusted brands with the best deals.
            </p>

          </div>


          {/* Popular Brands */}

          <div className="col-12 col-md-6 col-lg-3">

            <h5 className="footer-title fw-bold">Popular Brands</h5>

            <ul className="footer-list">
              <li>Apple</li>
              <li>Samsung</li>
              <li>Xiaomi</li>
              <li>OnePlus</li>
              <li>Realme</li>
              <li>Vivo</li>
            </ul>

          </div>


          {/* Quick Links */}

          <div className="col-12 col-md-6 col-lg-3">

            <h5 className="footer-title fw-bold">Quick Links</h5>

            <ul className="footer-list">
              <li><a href="/">Home</a></li>
              <li><a href="/brand">Brand</a></li>
              <li><a href="/cart">Cart</a></li>
        
            </ul>

          </div>


          {/* Contact Section */}

          <div className="col-12 col-md-6 col-lg-3">

            <h5 className="footer-title fw-bold">Contact Us</h5>

            <p className="footer-text">
              MobileHub Store<br/>
              Coimbatore, Tamil Nadu<br/>
              India
            </p>

            <p className="footer-text">📞 +91 8956548246</p>
            <p className="footer-text">📞 +91 6895232658</p>

            <p className="footer-text">
              ✉️ imkishor172@gmail.com
            </p>

          </div>


          {/* Bottom Footer */}

          <div className="col-12 text-center">

            <p className="fw-bold footer-text">

              © 2026 MobileHub | Designed & Developed by
              <a
                href="https://www.linkedin.com/in/kishor25/"
                className="text-decoration-none ms-1"
              >
                Kishor M
              </a>

            </p>

          </div>

        </div>
      </div>

    </footer>
  )
}

export default Footer