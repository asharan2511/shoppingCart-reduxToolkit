import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className="navbar">
      <span className="logo">Redux store</span>
      <div className="contents">
        <div className="navLinks">
          <div>
            <Link className="navLink" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="navLink" to="/cart">
              Cart
            </Link>
          </div>
        </div>
        <span className="cartCount">CART ITEMS:{items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
