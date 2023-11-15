import React from "react";
import about from "./images/femalabt.jpg";
import "./AboutUs.css";
function AboutUs() {
  return (
    <div className="aboutUs">
      <h3>BLACK BELT</h3>
      <p>Your gym dream</p>
      <div className="container">
        <div className="infos">
          <h1>Welcome to black belt club</h1>
          <p>
            Welcome to Black Belt Fitness Center, a cutting-edge facility
            designed to cater to individuals of all ages and interests. Our
            venue features dedicated zones for a variety of activities,{" "}
            <span>
              SPINNING, CROSS-TRAINNIIG, ZUMBA, CARDIO-BOXING, KARATE ,
              KICK-BOXING{" "}
            </span>
            including , providing a professional and immersive experience for
            enthusiasts of all skill levels. Recognizing the unique fitness
            needs of different age groups, Black Belt offers specialized
            training areas for children, teens, adults, and seniors
          </p>
        </div>
        <div className="image">
          <img src={about} alt="" />
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
