import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Function to handle Likes
  const toggleLike = (product) => {
    setLikedProducts((prevLiked) => {
      const isLiked = prevLiked.find((p) => p.id === product.id);
      return isLiked
        ? prevLiked.filter((p) => p.id !== product.id) // Remove if already liked
        : [...prevLiked, product]; // Add if not liked
    });
  };

  // Function to handle Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const isInCart = prevCart.find((p) => p.id === product.id);
      return isInCart ? prevCart : [...prevCart, product]; // Avoid duplicates
    });
  };

  return (
    <AppContext.Provider value={{ likedProducts, cart, toggleLike, addToCart }}>
      {children}
    </AppContext.Provider>
  );
};
