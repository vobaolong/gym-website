import React, { useEffect, useRef } from "react";
import "../../styles/Header.css";
import logo from "../../assets/logo.png";
const navLinks = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#schedule",
    display: "Schedule",
  },
  {
    path: "#classes",
    display: "Classes",
  },
  {
    path: "#pricing-plan",
    display: "Pricing",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          {/* LOGO */}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="logo" />
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="navigation">
            <ul className="menu">
              {navLinks.map((item) => (
                <li className="nav__item">
                  <a onClick={handleClick} href={item.path}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Navbar Right  */}
          <div className="nav__right">
            <button className="register__btn">Register</button>
            <span className="mobile__menu">
              <i className="fas fa-bars"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
