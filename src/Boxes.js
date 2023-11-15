import React from "react";
import "./Boxes.css";
import { Icon } from "@mui/material";

function Boxes({ title, Icon }) {
  return (
    <div className="boxes">
      <span>
        {" "}
        <Icon className="icon" />
      </span>

      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sit, ea
        debitis voluptatum{" "}
      </p>
    </div>
  );
}
export default Boxes;
