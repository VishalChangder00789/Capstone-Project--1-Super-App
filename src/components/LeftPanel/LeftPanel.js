import React from "react";
import "./LeftPanel.css";
import leftpanelImage from "../../assets/leftPanelImage.png";

const LeftPanel = () => {
  return (
    <div className="LeftPanelContainer">
      <img className="LeftPanelContainerImage" src={leftpanelImage} />
    </div>
  );
};

export default LeftPanel;
