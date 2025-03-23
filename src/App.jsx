import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import Account from "./Pages/Account";
import TrackOrder from "./Pages/TrackOrder";
import Product from "./Pages/Product";

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
