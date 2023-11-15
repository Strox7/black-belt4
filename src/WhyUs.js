import React from "react";
import "./WhyUs.css";

import NewReleasesIcon from "@mui/icons-material/NewReleases";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import HealingIcon from "@mui/icons-material/Healing";
import Boxes from "./Boxes";
function WhyUs() {
  return (
    <div className="WhyUs">
      <h3>Why Choose Us?</h3>
      <p>Push your limit Forwad</p>
      <div className="container">
        <Boxes Icon={NewReleasesIcon} title="Modern equipement" />
        <Boxes Icon={RestaurantIcon} title="Healthy nutrition plan" />
        <Boxes Icon={FitnessCenterIcon} title="Proffesponal training plan" />
        <Boxes Icon={HealingIcon} title="Unique to your needs" />
      </div>
    </div>
  );
}
export default WhyUs;
