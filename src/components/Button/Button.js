import React from "react";
import "./Button.css";

const Button = ({ title, navigation, information }) => {
  return (
    <div className="ButtonContainer">
      <button
        onClick={(e) => navigation(e, information)}
        className="ButtonContainer_Button"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
