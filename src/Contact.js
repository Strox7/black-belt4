import React from "react";

import "./Contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailIcon from "@mui/icons-material/Mail";
function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="box">
          <span>
            <LocationOnIcon className="icon" />
          </span>

          <a href="">sidi maroufe 350 lina, Casablanca 20000</a>
        </div>
        <div className="box">
          <span>
            <PhoneIphoneIcon className="icon" />
          </span>

          <a href="">+212 6 61 29 71 68</a>
        </div>
        <div className="box">
          <span>
            <MailIcon className="icon" />
          </span>

          <a href="">GYMBLACKBELT@GMAIL.COM</a>
        </div>
      </div>
    </div>
  );
}
export default Contact;
