import React, { useEffect, useState, useRef } from "react";
import "./page4.css";
import profileImage from "../../assets/profile.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CategorySlice from "../../components/CategorySlice/CategorySlice";
import axios from "axios";

const Page4 = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <div className="Page4">
      <div className="Page4-TopContent">
        <div className="Page4-AppHeading">Super app</div>
        <div className="Page4-ProfileIcon">
          <img src={profileImage} className="Page4-ProfileIcon-image" />
        </div>
      </div>

      {/*  */}
      <div className="Page4-Title">Entertainment according to your choice</div>

      <div className="Page4-Content-Container">
        {categories
          ? categories.map((m) => {
              return <CategorySlice heading={m} />;
            })
          : ""}
      </div>
    </div>
  );
};

export default Page4;
