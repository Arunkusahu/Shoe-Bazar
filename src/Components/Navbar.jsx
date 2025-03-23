import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainPage from "../assets/BackGround/Main_Page.jpg";
import { AppContext } from "../Context";

import {
  faHeart,
  faShoppingCart,
  faUser,
  faTruck,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./NavbarStyle.css";

export default function Navbar() {
  const [slide, setSlide] = useState(false);
  const { likedProducts, cart } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      setSlide(true);
    }, 1000); // Slide after 1 second
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Search Bar */}
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>

          {/* Logo */}
          <div className="logo">
            <Link to="/"><h2>Shoe Bazar</h2></Link>
          </div>

          {/* Icons */}
          <div className="icons">
            <Link to="/wishlist">
              <FontAwesomeIcon icon={faHeart} />
              {likedProducts.length > 0 && (
                <span className="count-badge">{likedProducts.length}</span>
              )}
            </Link>

            <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            {cart.length > 0 && <span className="count-badge">{cart.length}</span>}
          </Link>

            <Link to="/track-order">
              <FontAwesomeIcon icon={faTruck} />
            </Link>
            <Link to="/Account">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Sliding Image */}
      <div className={`slide-image ${slide ? "slide-up" : ""}`}>
        <img src={MainPage} alt="Shoe" />
      </div>

      {/* Categories */}
      <div className="categories">
        <ul>
          <li><Link to="/products?category=new">New Arrivals</Link></li>
          <li><Link to="/products?category=sneaker">Sneaker</Link></li>
          <li><Link to="/products?category=casual">Casual Shoe</Link></li>
          <li><Link to="/products?category=sports">Sports Shoe</Link></li>
          <li><Link to="/products?category=walking">Walking Shoe</Link></li>
          <li><Link to="/products?category=women">Women Shoe</Link></li>
          <li><Link to="/products?category=trending">Trending</Link></li>
        </ul>
      </div>
    </>
  );
}
