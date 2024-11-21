import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer section has-bg-image text-center"
      style={{ backgroundImage: `url("/assets/images/footer-bg.jpg")` }}
    >
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand has-before has-after">
            <a href="#" className="logo">
              <img
                src="/assets/images/logo.svg"
                width="160"
                height="50"
                loading="lazy"
                alt="grilli home"
              />
            </a>

            <address className="body-4">
              21, Boulevard Jean-Jaurès, 94260 FRESNES
            </address>

            <a
              href="mailto:restaurantmilane@gmail.com"
              className="body-4 contact-link"
            >
              restaurantmilane@gmail.com
            </a>

            <a href="tel:0146662579" className="body-4 contact-link">
              Demande de réservation : 01 46 66 25 79
            </a>

            <span className="flex flex-col">
              <b className="text-[#]">Horaires 12:00 à 14:30</b> de 19:00 à 23:00{" "}
            </span>

            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>


            <form action="" className="input-wrapper">
              <div className="icon-wrapper">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                <input
                  type="email"
                  name="email_address"
                  placeholder="Email"
                  autoComplete="off"
                  className="input-field"
                />
              </div>

              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Subscribe</span>

                <span className="text text-2" aria-hidden="true">
                  Subscribe
                </span>
              </button>
            </form>
          </div>

          <ul className="footer-list">
            <li>
              <a href="/" className="label-2 footer-link hover-underline">
             Accueil
              </a>
            </li>

            <li>
              <button href="#" className="label-2 footer-link hover-underline">
                menu
              </button>
            </li>

            <li>
              <Link
                href="/gallery"
                className="label-2 footer-link hover-underline"
              >
                Galerie
              </Link>
            </li>

            <li>
              <a
                href="/checkout"
                className="label-2 footer-link hover-underline"
              >
                Panier
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="label-2 footer-link hover-underline"
              >
                À propos de nous
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Facebook
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/milaneindien/profilecard/?igsh=eW9mcWR4YjVvZGh0" className="label-2 footer-link hover-underline">
                Instagram
              </a>
            </li>

            <li>
              <a
                href="https://maps.app.goo.gl/7xfXpab3E2F7SC5NA?g_st=iwb"
                className="label-2 footer-link hover-underline"
              >
                Google Map
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2024 Milane. Tous droits réservés | Conçu par
            <a
              href="https://www.instagram.com/danzia_2021/"
              target="_blank"
              className="link"
            >
              {" "}
              Danzia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
