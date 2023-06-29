import React from "react";
import "./page1.css";
import LeftPanel from "../../components/LeftPanel/LeftPanel";
import RightPanel from "../../components/RightPanel/RightPanel";

const page1 = () => {
  return (
    <div className="App">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default page1;
