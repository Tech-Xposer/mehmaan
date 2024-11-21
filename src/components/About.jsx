import React from "react";

const About = () => {
  return (
    <section
      className="section about text-center"
      aria-labelledby="about-label"
      id="about"
    >
      <div className="container">
        <div className="about-content">
          <p className="label-2 section-subtitle" id="about-label">
            Notre histoire
          </p>
          <h2 className="headline-1 section-title">
            Chaque saveur raconte une histoire
          </h2>
          <p className="section-text">
            Né d'une passion pour la gastronomie notre restaurant a pour
            mission de célébrer les saveurs authentiques et les traditions
            culinaires. Chaque plat est préparé avec des ingrédients locaux et
            de saison garantissant fraîcheur et qualité. Nous créons une
            ambiance chaleureuse et accueillante invitant chacun à
            savourer des moments inoubliables autour d'une bonne table.
          </p>
          <div className="contact-label">Réservation par téléphone</div>
          <a
            href="tel:0146662579"
            className="body-1 contact-number hover-underline"
          >
            01 46 66 25 79{" "}
          </a>
          <a href="#about" className="btn btn-primary">
            <span className="text text-1">En savoir plus</span>
            <span className="text text-2" aria-hidden="true">
              En savoir plus
            </span>
          </a>
        </div>
        <figure className="about-banner">
          <img
            src="/assets/images/about-banner.jpg"
            width={570}
            height={570}
            loading="lazy"
            alt="about banner"
            className="w-100"
            data-parallax-item=""
            data-parallax-speed={1}
          />
          <div
            className="abs-img abs-img-1 has-before"
            data-parallax-item=""
            data-parallax-speed="1.75"
          >
            <img
              src="/assets/images/about-abs-image-1.png"
              width={285}
              height={285}
              loading="lazy"
              alt=""
              className="w-100"
            />
          </div>
          <div className="abs-img abs-img-2 has-before">
            <img
              src="/assets/images/badge-2.png"
              width={133}
              height={134}
              loading="lazy"
              alt=""
            />
          </div>
        </figure>
        <img
          src="/assets/images/shape-3.png"
          width={197}
          height={194}
          loading="lazy"
          alt=""
          className="shape"
        />
      </div>
    </section>
  );
};

export default About;
