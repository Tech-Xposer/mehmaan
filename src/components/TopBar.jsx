import React from "react";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <address className="topbar-item">
          <div className="icon">
            <ion-icon name="location-outline" aria-hidden="true" />
          </div>
          <span className="span">
            21 Boulevard Jean-Jaurès 94260 FRESNES
          </span>
        </address>
        <div className="separator" />
        <div className="topbar-item item-2 ">
          <div className="icon ">
            <ion-icon name="time-outline" aria-hidden="true" />
          </div>
          <div className="flex gap-5">
            {" "}
            <span className="span">
              <b className="text-[#]">Horaires 12:00 à 14:30 de 19:00 à 23:00</b>{" "}
            </span>
            
          </div>
        </div>
        <a href="tel:0146662579" className="topbar-item link">
          <div className="icon">
            <ion-icon name="call-outline" aria-hidden="true" />
          </div>
          <span className="span"> 01 46 66 25 79</span>
        </a>
        <div className="separator" />
        <a href="mailto:restaurantmilane@gmail.com" className="topbar-item link">
          <div className="icon">
            <ion-icon name="mail-outline" aria-hidden="true" />
          </div>
          <span className="span">restaurantmilane@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
