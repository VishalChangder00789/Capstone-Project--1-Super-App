import React, { useEffect, useState } from "react";
import "./CheckBox.css";

const CheckBox = ({ information, setInformation }) => {
  const [checked, setChecked] = useState(false);
  const [firsTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (checked == true) {
      let newObj = { ...information, checkBox: true };
      setInformation(newObj);
    }
  }, [checked]);
  return (
    <div className="CheckBoxContainer">
      <div className="CheckBoxContent">
        <input
          onClick={() => {
            setChecked(!checked);
            setFirstTime(false);
          }}
          className="checkbox"
          type="checkbox"
        />
        Share my registration data with super app
      </div>
      {!checked && !firsTime ? (
        <div className="ErrorClass">Please check the checkbox</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CheckBox;
