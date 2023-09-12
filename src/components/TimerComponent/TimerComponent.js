import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./TimerComponent.css";
import { useEffect } from "react";
import { useState } from "react";

const UrgeWithPleasureComponent = ({ timeSet, timerStart }) => {
  const [duration, setDuration] = useState(
    timeSet.hour * 3600 + timeSet.minute * 60 + timeSet.second
  );

  useEffect(() => {
    setDuration(timeSet.hour * 3600 + timeSet.minute * 60 + timeSet.second);
  });

  const minuteSeconds = 60;
  const hourSeconds = 3600;

  const renderTime = (time) => {
    return (
      <div className="ClockContainer">
        <div className="time">
          {time.hour < 10 ? `0${time.hour}` : time.hour} :{" "}
          {time.minute < 10 ? `0${time.minute}` : time.minute} :{" "}
          {time.seconds < 10 ? `0${time.seconds}` : `${time.seconds}  `}
        </div>
      </div>
    );
  };

  const getTime = (remainingTime, duration) => {
    let showTime = remainingTime;

    let hour = parseInt(remainingTime / 3600);
    let minute = parseInt((remainingTime / 60) % 60);
    let seconds = 60 - ((duration - remainingTime) % 60);
    if (seconds === 60) {
      seconds = 0;
    }

    return renderTime({ hour, minute, seconds });
  };

  return (
    <div className="TimerComponent">
      <CountdownCircleTimer
        isPlaying={!timerStart ? false : true}
        duration={duration}
        colors={["#FF6A6A"]}
        size={150}
        trailColor="#181D37"
      >
        {({ remainingTime }) => <div>{getTime(remainingTime, duration)}</div>}
      </CountdownCircleTimer>
    </div>
  );
};

export default UrgeWithPleasureComponent;
