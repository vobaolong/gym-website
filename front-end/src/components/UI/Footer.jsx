import React from "react";
import "../../styles/Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="1500">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__box">
            <div className="logo">
              <div className="logo__img">
                <img src={logo} alt="" />
              </div
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              amet laboriosam laborum odit rem est?
            </p>
          </div>

          <div className="footer__box">
            <h4 className="footer__title">Company</h4>

            <ul className="footer__as">
              <li>
                <a href="#">Our program</a>
              </li>
              <li>
                <a href="#">Our plan</a>
              </li>
              <li>
                <a href="#">Become a member</a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h4 className="footer__title">Quick as</h4>

            <ul className="footer__as">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h4 className="footer__title">Quick as</h4>

            <ul className="footer__as">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="copyright">
          Copyright - 2022 by VoBaoLong. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
