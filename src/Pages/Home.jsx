import React, { useEffect, useState } from "react";
import "../Style/HomeStyle.css";
import Crosual1 from "../assets/BackGround/Crosual1.jpg";
import Crosual2 from "../assets/BackGround/Crosual2.jpg";
import Crosual3 from "../assets/BackGround/Crosual3.jpg";
import Crosual4 from "../assets/BackGround/Crosual4.jpg";
import Poster from "../assets/BackGround/Poster.jpg";
import { FaStore, FaUsers, FaDownload, FaEye } from "react-icons/fa";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [counts, setCounts] = useState({
    visit: 0,
    store: 0,
    staff: 0,
    download: 0
  });

  const images = [Crosual1, Crosual2, Crosual3, Crosual4];

  // Image Carousel Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll Counter Effect
  useEffect(() => {
    const handleScroll = () => {
      const newCounts = { visit: 100, store: 25, staff: 500, download: 1000 };

      Object.keys(newCounts).forEach((key) => {
        let start = 0;
        let end = newCounts[key];
        let duration = 2000;
        let stepTime = Math.floor(duration / end);

        const interval = setInterval(() => {
          setCounts((prevCounts) => {
            if (prevCounts[key] >= end) {
              clearInterval(interval);
              return prevCounts;
            }
            return { ...prevCounts, [key]: prevCounts[key] + 1 };
          });
        }, stepTime);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container">
      <div className="carousel">
        <img src={images[currentImage]} alt="Carousel Slide" className="carousel-image" />
      </div>

      <div className="visitor">
        <div className="box box1">
          <div className="round"><FaEye /></div>
          <h1>Website Visit</h1>
          <p className="count-number">{counts.visit}+</p>
        </div>

        <div className="box box2">
          <div className="round"><FaStore /></div>
          <h1>Our Store</h1>
          <p className="count-number">{counts.store}+</p>
        </div>

        <div className="box box3">
          <div className="round"><FaUsers /></div>
          <h1>Employee & Staff </h1>
          <p className="count-number">{counts.staff}+</p>
        </div>

        <div className="box box4">
          <div className="round"><FaDownload /></div>
          <h1>Download App</h1>
          <p className="count-number">{counts.download}+</p>
        </div>
      </div>

      {/* Poster Outlet */}
      <div className="poster">
        <img src={Poster} alt="Poster Design" />
      </div>

      {/* Footer Section */}
      <div className="footer">
        <div className="cart-box">
          <h2>Location</h2>
          <ul>
            <li>Banglore</li>
            <li>Bhubaneswar</li>
            <li>Pune</li>
            <li>Mumbai</li>
            <li>Kolkata</li>
          </ul>
        </div>

        <div className="cart-box">
          <h2>Contact</h2>
          <ul>
            <li>+91 909012-2323</li>
            <li>+91 909012-2525</li>
            <li>arunkumarsahu634@gmail.com</li>
          </ul>
        </div>

        <div className="cart-box">
          <h2>Follows</h2>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Whatsapp</li>
          </ul>
        </div>

        <div className="cart-box">
          <h2>Our Services</h2>
          <ul>
            <li>Fast Delivery</li>
            <li>Easy Payment</li>
            <li>Privacy & Secure</li>
            <li>Term & Policies</li>
          </ul>
        </div>


        <div className="footer-down">
          <h4>Thank you for Coming 😊... Visit Again !!!</h4>
          <h5>Design by @Arunkumar 😎</h5>
        </div>
      </div>
    </div>
  );
}
