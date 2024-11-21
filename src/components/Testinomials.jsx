import React from "react";

const Testinomials = () => {
  return (
    <section
      className="section testi text-center has-bg-image"
      style={{ backgroundImage: 'url("./assets/images/testimonial-bg.jpg")' }}
      aria-label="testimonials"
    >
      <div className="container">
        <div className="quote">”</div>
        <p className="headline-2 testi-text">
          Je tenais à te remercier de m'avoir invité à ce dîner incroyable
          l'autre soir. La nourriture était exceptionnelle.
        </p>
        <div className="wrapper">
          <div className="separator" />
          <div className="separator" />
          <div className="separator" />
        </div>
        <div className="profile">
          <img
            src="/assets/images/Ashutosh.jpg"
            width={100}
            height={100}
            loading="lazy"
            alt="Sam Jhonson"
            className="img"
          />
          <p className="label-2 profile-name">Léo</p>
        </div>
      </div>
    </section>
  );
};

export default Testinomials;
