import React from "react";
import "./Maps.css";
function Maps() {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398.536972951446!2d-7.65213079564163!3d33.51957877000935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d96063167a9%3A0xa3e51d03ebf47e24!2sBlack%20Belt%20Gym!5e0!3m2!1sen!2sma!4v1699894812208!5m2!1sen!2sma"
        width="100%"
        height="500"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="google map"
      ></iframe>
    </div>
  );
}
export default Maps;
