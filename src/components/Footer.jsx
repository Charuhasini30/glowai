import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div>
          <h3>GlowAI</h3>
          <p>
            AI-powered beauty discovery platform helping users
            find salons, services, and beauty products.
          </p>
        </div>

        <div>
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Blogs</a>
          <a href="#">Partner With Us</a>
        </div>

        <div>
          <h4>Services</h4>
          <a href="#">Hair Styling</a>
          <a href="#">Bridal Makeup</a>
          <a href="#">Skin Care</a>
          <a href="#">Salon Booking</a>
        </div>

        <div>
          <h4>Support</h4>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Help Center</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 GlowAI. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;