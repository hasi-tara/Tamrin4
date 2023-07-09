import { NavLink } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div className="copywriting">FREE SHIPPING ON ORDERS OVER $75</div>

      <div className="menu">
        <div>
          <NavLink to="/" className="logo herder-link">
            ° PURE FLAVE
          </NavLink>
          <NavLink to="/shop" className="herder-link">
            Shop
          </NavLink>
          <NavLink to="/about" className="herder-link">
            About Us
          </NavLink>
          <NavLink to="/contact" className="herder-link">
            Contact
          </NavLink>
        </div>

        <div>
          <NavLink to="/login" className="herder-link">
            <FaUser className="user-icon" />
            Login
          </NavLink>
          <NavLink to="/basket" className="herder-link">
            <FaShoppingCart className="user-icon" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Header;
