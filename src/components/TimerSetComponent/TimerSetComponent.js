import React, { useEffect, useState } from "react";
import "./TimerSetComponent.css";
import upArrow from "./../../assets/upArrowTimer.png";
import downArrow from "./../../assets/downArrowTimer.png";

const TimerSetComponent = ({ setTimeSet, setTimerStart, timerStart }) => {
  const [Hour, setHour] = useState(0);
  const [Minute, setMinute] = useState(0);
  const [Second, setSecond] = useState(0);

  const onTimePlay = (hour, minute, second) => {
    setTimeSet({ hour, minute, second });
    setTimerStart(true);
  };

  const onTimePause = () => {
    setTimeSet(false);
  };

  const handleUpArrow = (time, set, name) => {
    let newTime = time;
    newTime++;
    if (name === "hour") {
      if (newTime > 12) {
        newTime = 0;
      }
    }
    if (newTime > 60) {
      newTime = 0;
    }
    set(newTime);
  };

  const handleDownArrow = (time, set, name) => {
    let newTime = time;
    newTime--;
    if (name === "hour") {
      if (newTime < 0) {
        newTime = 12;
      }
    }
    if (newTime < 0) {
      newTime = 60;
    }
    set(newTime);
  };

  return (
    <div className="TimerSetComponentContainer">
      <div className="InnerContainer">
        <div className="SetTimeComponent Hour">
          <label>Hours</label>
          <div className="TextContainer">
            <img
              src={upArrow}
              onClick={(e) => handleUpArrow(Hour, setHour, "hour")}
            />
            <span>{Hour < 10 ? `0${Hour}` : `${Hour}`}</span>
            <img
              src={downArrow}
              onClick={(e) => handleDownArrow(Hour, setHour, "hour")}
            />
          </div>
        </div>
        :
        <div className="SetTimeComponent Minute">
          <label>Minutes</label>
          <div className="TextContainer">
            <img
              src={upArrow}
              onClick={(e) => handleUpArrow(Minute, setMinute)}
            />
            <span>{Minute < 10 ? `0${Minute}` : `${Minute}`}</span>
            <img
              src={downArrow}
              onClick={(e) => handleDownArrow(Minute, setMinute)}
            />
          </div>
        </div>
        :
        <div className="SetTimeComponent Second">
          <label>Seconds</label>
          <div className="TextContainer">
            <img
              src={upArrow}
              onClick={(e) => handleUpArrow(Second, setSecond)}
            />
            <span>{Second < 10 ? `0${Second}` : `${Second}`}</span>
            <img
              src={downArrow}
              onClick={(e) => handleDownArrow(Second, setSecond)}
            />
          </div>
        </div>
      </div>
      <button
        className="TimerButton"
        onClick={(e) => onTimePlay(Hour, Minute, Second)}
      >
        Start
      </button>
    </div>
  );
};

export default TimerSetComponent;
