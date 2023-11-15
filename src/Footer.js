import React from "react";

import "./Footer.css";
import logo from "./images/blackbelt-logo-removebg.png";
import { Facebook, Instagram } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="box">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            earum.
          </p>
          <span className="icons">
            <Instagram className="icon" />
            <WhatsAppIcon className="icon" />
            <Facebook className="icon" />
          </span>
        </div>
        <div className="box">
          <h1>Useful Links</h1>
          <ul>
            <li>
              <a href="">activities</a>
            </li>
            <li>
              <a href="">abouts us</a>
            </li>
            <li>
              <a href="">team</a>
            </li>
            <li>
              <a href="">conatct us</a>
            </li>
          </ul>
        </div>
        <div className="box">
          <h1>Contact us</h1>
          <div className="hold">
            <span>
              <PhoneIcon className="icon" />
            </span>

            <a href="">+212 6 61 29 71 68</a>
          </div>
          <div className="hold">
            <span>
              <MailIcon className="icon" />
            </span>

            <a href="">GYMBLACKBELT@GMAIL.COM</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
