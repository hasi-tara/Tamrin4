import { FaFacebook,FaInstagram,FaTwitter,FaTiktok } from "react-icons/fa";
import '../styles/Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-column">
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Shipping Policy</a>
        <a href="#">Refund Policy</a>
      </div>
      <div className="footer-column">
        <a href="#">Cookie Policy​</a>
        <a href="#">FAQ</a>
        <a href="#">Payment Methods</a>
      </div>
      <div className="footer-column">
        <p>Address:</p>
        <p>500 Terry Francine St.</p>
        <p>San Francisco, CA 94158</p>
      </div>
      <div className="footer-column">
        <p>Contact:</p>
        <a href="mailto:info@mysite.com">info@mysite.com</a>
        <p>123-456-7890</p>
        <span>
            <a href="#"><FaFacebook className="footer-icon"/></a>
            <a href="#"><FaInstagram className="footer-icon"/></a>
            <a href="#"><FaTwitter className="footer-icon"/></a>
            <a href="#"><FaTiktok className="footer-icon"/></a>
        </span>
      </div>
    </div>
  );
};
export default Footer;
