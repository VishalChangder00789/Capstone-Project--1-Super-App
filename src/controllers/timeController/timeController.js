const timer = (time) => {
  startTimer(time);
};

const startTimer = (time) => {
  // convert the time to hours, minutes and seconds
  let timeArray = time.split(":");
  let hour = timeArray[0];
  let minute = timeArray[1];
  let seconds = timeArray[2];

  const innerFunction = (hour, minute, seconds) => {
    console.log(`${hour} : ${minute} : ${seconds}`);
    if (parseInt(seconds) === 0) {
      seconds = 59;
      if (parseInt(minute) === 0) {
        minute = 59;
        if (parseInt(hour) === 0) {
          console.log("Time Up");
        }
        hour--;
      }
      minute--;
    }
    seconds--;
  };

  const interval = setInterval(innerFunction, 1000, hour, minute, seconds);
  console.log("Interval : ", interval);
};

export default timer;
