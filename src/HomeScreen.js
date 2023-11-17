import React, { useEffect, useRef, useState } from "react";
import "./HomeScreen.css";
import logo from "./images/blackbelt-logo-removebg.png";
import video from "./images/bbelt.mp4";
import MenuIcon from "@mui/icons-material/Menu";
import WhyUs from "./WhyUs";
import Offers from "./Offers";
import AboutUs from "./AboutUs";
import Maps from "./Maps";
import Contact from "./Contact";
import Footer from "./Footer";
function HomeScreen() {
  const navRef = useRef();
  const videoRef = useRef();
  const head = useRef();
  const [toggle, settogle] = useState();
  const showNavBar = () => {
    // if (window.scrollY > 100) {
    //   settogle(
    //     navRef.current.classList.toggle("nav__togled"),

    //     navRef.current.classList.toggle("balck_bg_toggle")
    //   );
    // } else {
    //   settogle(
    //     navRef.current.classList.remove("balck_bg_toggle"),
    //     navRef.current.classList.toggle("nav__togled"),
    //     videoRef.current.classList.toggle("video__togled")
    //   );
    // }
    settogle(
      navRef.current.classList.toggle("nav__togled"),

      navRef.current.classList.toggle("balck_bg_toggle")
    );
    if (navRef.current.classList.contains("nav__togled")) {
      head.current.classList.add("black-bb");
    } else {
      head.current.classList.remove("black-bb");
    }
  };
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className="homeScreen">
      <header ref={head} className={`nav  ${show && "nav__black"}`}>
        <div className="image">
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul ref={navRef}>
            <li>
              <a className="active" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">Activities</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div onClick={showNavBar} className="menu__icon">
          <MenuIcon />
        </div>
      </header>
      <div ref={videoRef} className={`video__landing ${showNavBar}`}>
        <video loop muted autoPlay playsInline controls="">
          <source src={video} type="video/mp4" />
        </video>
        <div className="info">
          <p className="one">shape your body</p>
          <p className="two">
            BE <span>Strong</span>
          </p>
          <p className="three">Tranning hard</p>
          <button>Contact Us</button>
        </div>
      </div>
      <WhyUs />
      <Offers />
      <AboutUs />
      <Contact />
      <Maps />
      <Footer />
    </div>
  );
}
export default HomeScreen;
