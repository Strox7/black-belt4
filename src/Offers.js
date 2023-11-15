import React from "react";

import "./Offers.css";
import cardio from "./images/cardio.jpg";
import crossfit from "./images/crossfit.jpg";
import karate from "./images/karate.jpg";
import musculation from "./images/musculation.jpg";
import kickboxing from "./images/kickboxing.webp";
function Offers() {
  return (
    <div className="offers">
      <h3>OUR CLASSES</h3>
      <p>WHAT WE CAN OFFER</p>

      <div className="container">
        <div className="box">
          <img src={cardio} alt="" />
          <div className="black__bg"></div>
          <div className="holder">
            <span>CARDIO</span>
            <span>WEIGHTLIFTING</span>
          </div>
        </div>
        <div className="box">
          <img src={crossfit} alt="" />
          <div className="black__bg"></div>
          <div className="holder">
            <span>CROSS-TRAINNIG</span>
            <span>WEIGHTLIFTING</span>
          </div>
        </div>
        <div className="box">
          <img src={karate} alt="" />
          <div className="black__bg"></div>
          <div className="holder">
            <span>KARATE</span>
            <span>WEIGHTLIFTING</span>
          </div>
        </div>
        <div className="box item-4">
          <img src={musculation} alt="" />
          <div className="black__bg"></div>
          <div className="holder">
            <span>MUSCULATION</span>
            <span>WEIGHTLIFTING</span>
          </div>
        </div>
        <div className="box item-4">
          <img src={kickboxing} alt="" />
          <div className="black__bg"></div>
          <div className="holder">
            <span>KICK-BOXING</span>
            <span>WEIGHTLIFTING</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Offers;
