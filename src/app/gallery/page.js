"use client";
import React, { useEffect } from "react";
import "./gallery.css";
import Image from "next/image";

const GalleryPage = () => {
  useEffect(() => {
    const starContainer = document.querySelector(".sparkling-stars");
    const numStars = 100; // Adjust number of stars

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      starContainer.appendChild(star);
    }

    // Handling gallery item clicks
    document.querySelectorAll(".gallery-item").forEach((item) => {
      item.addEventListener("click", (event) => {
        const modal = document.getElementById("image-modal");
        const modalImg = document.getElementById("modal-img");
        modal.style.display = "flex"; // Show the modal
        modalImg.src = event.target.src; // Set modal image to clicked image
      });
    });

    // Close the modal on clicking the close button
    document.getElementById("modal-close").addEventListener("click", () => {
      document.getElementById("image-modal").style.display = "none"; // Hide the modal
    });
  }, []);
  return (
    <>
      <div className="sparkling-stars" /> {/* Moving sparkles background */}
      <header>
        <h1 className="text-5xl font-londrina">Galerie Milane</h1>
      </header>
      <div className="gallery-container">
        <div className="gallery">
          <Image
            src="assets/images/image (1).jpg"
            alt="Image 1"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (2).jpg"
            alt="Image 2"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (3).jpg"
            alt="Image 3"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (4).jpg"
            alt="Image 4"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (5).jpg"
            alt="Image 5"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (6).jpg"
            alt="Image 6"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (7).jpg"
            alt="Image 7"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (8).jpg"
            alt="Image 8"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (9).jpg"
            alt="Image 9"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (10).jpg"
            alt="Image 10"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (11).jpg"
            alt="Image 11"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (12).jpg"
            alt="Image 12"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (13).jpg"
            alt="Image 13"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (14).jpg"
            alt="Image 14"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (15).jpg"
            alt="Image 15"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (16).jpg"
            alt="Image 16"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (17).jpg"
            alt="Image 17"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (18).jpg"
            alt="Image 18"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (19).jpg"
            alt="Image 19"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (20).jpg"
            alt="Image 20"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (21).jpg"
            alt="Image 21"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (22).jpg"
            alt="Image 22"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (23).jpg"
            alt="Image 23"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (24).jpg"
            alt="Image 24"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (25).jpg"
            alt="Image 25"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (26).jpg"
            alt="Image 26"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (27).jpg"
            alt="Image 27"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (28).jpg"
            alt="Image 28"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (29).jpg"
            alt="Image 29"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (30).jpg"
            alt="Image 30"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (31).jpg"
            alt="Image 31"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (32).jpg"
            alt="Image 32"
            className="gallery-item"
          />
          <Image
            src="assets/images/image (33).jpg"
            alt="Image 33"
            className="gallery-item"
          />
          {/* Add more images as needed */}
        </div>
      </div>
      <div id="image-modal" className="modal">
        <span id="modal-close" className="modal-close">
          ×
        </span>
        <Image id="modal-img" src="" alt="" />
      </div>
    </>
  );
};

export default GalleryPage;
