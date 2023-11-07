import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              Have questions? Feel free to <a href="/contact">contact us</a>.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Accepted Payments</h5>
            <div className="payment-logos">
              <img src="/paypal-logo.png" alt="PayPal " />
              <img src="/visa-logo.png" alt="Visa " />
              <img src="/mastercard-logo.png" alt="Mastercard" />
            </div>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://www.facebook.com">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <p className="text-muted text-center">
              &copy; {new Date().getFullYear()} Huseyin Soylu. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
