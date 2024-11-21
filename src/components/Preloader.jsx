"use client";
import { useEffect, useRef } from "react";

const Preloader = () => {
  const preloaderRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      if (preloaderRef.current) {
        // Add the loaded class after a delay for a better effect
        setTimeout(() => {
          preloaderRef.current.classList.add("loaded");
          document.body.classList.add("loaded");
        }, 100); // Adjust delay as necessary
      }
    };

    // Add event listener to trigger after window load
    window.addEventListener("load", handleLoad);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    // <div className="preload" data-preaload ref={preloaderRef}>
    //   {/* <div className="circle"></div>
    //   <p className="text">Milane</p> */}
    // </div>
    <div></div>
  );
};

export default Preloader;
