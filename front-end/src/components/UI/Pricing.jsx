import React from "react";
import "../../styles/Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing-plan">
      <div className="container">
        <div className="pricing__top">
          <h2 className="section__title">
            Fitness <span className="highlights">Pricing</span> Plan
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit.
            Omnis asperiores, rem voluptatum sit in ratione.
          </p>
        </div>

        {/* ========== pricing wrapper =========== */}
        <div className="pricing__wrapper">
          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Regular Member</h2>
              <h2 className="pricing section__title">
                $50 <span>/month</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <i className="far fa-check-square"></i>
                  </span>{" "}
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i className="far fa-check-square"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i className="far fa-check-square"></i>
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i className="far fa-check-square"></i>
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <i className="far fa-check-square"></i>
                  </span>
                  5 classes per week
                </li>
              </ul>

              <button className="register__btn">Join Now</button>
            </div>
          </div>

          <div
            className="pricing__item pricing__item-02"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Premium Member</h2>
              <h2 className="pricing section__title">
                $70 <span>/month</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <i className="far fa-check-square"></i>
                  </span>{" "}
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i className="far fa-check-square"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i className="far fa-check-square"></i>
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i className="far fa-check-square"></i>
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <i className="far fa-check-square"></i>
                  </span>
                  5 classes per week
                </li>
              </ul>

              <button className="register__btn">Join Now</button>
            </div>
          </div>

          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Standard Member</h2>
              <h2 className="pricing section__title">
                $100 <span>/month</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                <li>
                  <span>
                    <i className="far fa-check-square"></i>
                  </span>{" "}
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i className="far fa-check-square"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i className="far fa-check-square"></i>
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i className="far fa-check-square"></i>
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <i className="far fa-check-square"></i>
                  </span>
                  5 classes per week
                </li>
              </ul>

              <button className="register__btn">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
