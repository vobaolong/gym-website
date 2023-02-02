import React from "react";
import hero from "../../assets/hero.png";
import dumble from "../../assets/dumble.png";
import "../../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="hero__wrapper">
          {/* ========== hero content ========== */}
          <div className="hero__content">
            <h2
              className="section__title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Exercise is the key to a
              <span className="highlights"> Healthy</span> Lifestyle
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
              Laboriosam repellendus odit fugit eos! Id, labore.
            </p>

            <div
              className="hero__btns"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="2000"
            >
              <button className="register__btn">Get Started</button>
              <button className="watch__btn">
                <span>
                  <i className="fas fa-play-circle"></i>
                </span>
                Watch Video
              </button>
            </div>
          </div>

          {/* ========= hero img ============= */}
          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={hero} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="heart__rate"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h5>Heart Rate</h5>
                <span>
                  <i className="fas fa-heartbeat"></i>
                </span>
                <h6>2567 BPM</h6>
              </div>

              <div
                className="fitness__location"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <h5>
                  Find a new <br /> fitness near you
                </h5>
              </div>

              <div
                className="dumble__icon"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <img src={dumble} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
