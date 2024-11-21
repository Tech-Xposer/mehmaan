"use client";
import { createContext, useContext, useState } from "react";

// Create a context for the menu
const MenuContext = createContext();

// Custom hook to use the MenuContext
export const useMenu = () => {
  return useContext(MenuContext);
};

// Context provider component
export const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu state
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    // Disable body scroll when menu is open
    document.body.style.overflowY = menuOpen ? "auto" : "hidden";
  };

  return (
    <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
