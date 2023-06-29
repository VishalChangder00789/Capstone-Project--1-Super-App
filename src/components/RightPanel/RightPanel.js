import React, { useEffect, useState } from "react";
import "./RightPanel.css";
import Input from "../Input/Input";
import CheckBox from "../CheckBox/CheckBox";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addData } from "../../store/InputsSlice";

const RightPanel = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.inputs);
  const dispatch = useDispatch();
  const [information, setInformation] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    checkBox: false,
  });

  const handleNavigation = (e, information) => {
    e.preventDefault();
    // I am getting a good information
    if (
      !information.name ||
      !information.username ||
      !information.email ||
      !information.phone ||
      !information.checkBox
    ) {
      return;
    } else {
      dispatch(addData(information));
    }

    // navigate to the new page
    navigate("/selectCategory");
  };

  useEffect(() => {
    console.log(data);
  });
  return (
    <div className="RightPanelContainer">
      <div className="RightPanelHeading">Super app</div>
      <div className="RightPanelSubHeading1">Create your new account</div>
      <form className="RightPanelFormContainer">
        <Input
          information={information}
          setInformation={setInformation}
          type="name"
          placeholder="Name"
        />
        <Input
          information={information}
          setInformation={setInformation}
          type="username"
          placeholder="Username"
        />
        <Input
          information={information}
          setInformation={setInformation}
          type="email"
          placeholder="Email"
        />
        <Input
          information={information}
          setInformation={setInformation}
          type="phone"
          placeholder="Mobile"
        />
        <CheckBox information={information} setInformation={setInformation} />

        {/* Navigate to registered */}
        <Button
          title="SIGN UP"
          information={information}
          navigation={handleNavigation}
        />

        <div className="RightPanelContainer_Detail">
          <div className="Detail1">
            By clicking on Sign up. you agree to Superapp{" "}
            <span className="Details1_green">Terms and Conditions of Use</span>
          </div>
          <div className="Detail2">
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" , "}
            <span className="Details1_green">Privacy Policy</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RightPanel;
