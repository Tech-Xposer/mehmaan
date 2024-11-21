import React from "react";

const Features = () => {
  return (
    <section className="section features text-center" aria-label="features">
      <div className="container">
        <p className="section-subtitle label-2">Pourquoi nous choisir ?</p>
        <h2 className="headline-1 section-title">Nos atouts</h2>
        <ul className="grid-list">
          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <img
                  src="/assets/images/features-icon-1.png"
                  width={100}
                  height={80}
                  loading="lazy"
                  alt="icon"
                />
              </div>
              <h3 className="title-2 card-title">Hygiénique</h3>
              <p className="label-1 card-text">
                Des plats frais et préparés dans un environnement hygiénique...
              </p>
            </div>
          </li>
          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <img
                  src="/assets/images/features-icon-2.png"
                  width={100}
                  height={80}
                  loading="lazy"
                  alt="icon"
                />
              </div>
              <h3 className="title-2 card-title">Environnement</h3>
              <p className="label-1 card-text">
                Un environnement accueillant
              </p>
            </div>
          </li>
          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <img
                  src="/assets/images/features-icon-3.png"
                  width={100}
                  height={80}
                  loading="lazy"
                  alt="icon"
                />
              </div>
              <h3 className="title-2 card-title">Chefs qualifiés</h3>
              <p className="label-1 card-text">
                Des chefs qualifiés passionnés par la création de plats exquis.
              </p>
            </div>
          </li>
          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <img
                  src="/assets/images/features-icon-4.png"
                  width={100}
                  height={80}
                  loading="lazy"
                  alt="icon"
                />
              </div>
              <h3 className="title-2 card-title">Événements et fêtes</h3>
              <p className="label-1 card-text">
                Nous transformons vos événements en moments inoubliables.
              </p>
            </div>
          </li>
        </ul>
        <img
          src="/assets/images/shape-7.png"
          width={208}
          height={178}
          loading="lazy"
          alt="shape"
          className="shape shape-1"
        />
        <img
          src="/assets/images/shape-8.png"
          width={120}
          height={115}
          loading="lazy"
          alt="shape"
          className="shape shape-2"
        />
      </div>
    </section>
  );
};

export default Features;
