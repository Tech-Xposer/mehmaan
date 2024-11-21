"use client";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMenu } from "@/contexts/MenuContext"; // Import the useMenu hook

export default function ClientLayout({ children }) {
  const { menuOpen, toggleMenu } = useMenu(); // Get menu state and toggle function from context

  return (
    <div className="top">
      <TopBar />
      <Header toggleMenu={toggleMenu} />
      {children}
      <Footer />
      <a
        href="#top"
        className="back-top-btn active"
        aria-label="back to top"
        data-back-top-btn
      >
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
      {menuOpen && <Menu toggleMenu={toggleMenu} />}{" "}
      {/* Display the Menu based on context */}
      <ToastContainer autoClose={500} />
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></Script>
    </div>
  );
}
