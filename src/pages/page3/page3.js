import React, { useEffect, useState, useRef } from "react";
import "./page3.css";

import profileImage from "../../assets/profile.png";
import { useSelector } from "react-redux";
import getWeather from "../../api/searchCurrent";
import windImage from "../../assets/wind.png";
import rainDrop from "../../assets/rainDrop.png";
import getNews from "../../api/newsApi";
import TimerComponent from "../../components/TimerComponent/TimerComponent";
import TimerSetComponent from "../../components/TimerSetComponent/TimerSetComponent";
import { useNavigate } from "react-router-dom";

const Page3 = () => {
  const profileDetails = useSelector((state) => state.inputs);
  const choices = useSelector((state) => state.categories);
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [weatherType, setWetherType] = useState("");
  const [newsHead, setNewsHead] = useState("");

  const [timeSet, setTimeSet] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const [timerStart, setTimerStart] = useState(false);

  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/browse");
  };

  useEffect(() => {
    getWeather().then((data) => {
      const { humidity, pressure_mb, temp_c, wind_kph } = data.current;
      const { country, localtime, name, region } = data.location;
      const { text, icon } = data.current.condition;
      setCondition({ humidity, pressure_mb, temp_c, wind_kph });
      setLocation({ country, localtime, name, region });
      setWetherType({ text, icon });
    });
  }, []);

  useEffect(() => {
    getNews()
      .then((data) => {
        // console.log(data.data.articles);

        setNewsHead(
          data.data.articles[
            Math.floor(Math.random() * data.data.articles.length)
          ]
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="Page3">
      <div className="LeftContainer">
        <div className="Top">
          <div className="Profile">
            <div className="ProfileContainer">
              <div className="Left_ProfileImage">
                <img className="Left_ProfileImage_Image" src={profileImage} />
              </div>
              <div className="Right_ProfileDetails">
                <div className="Name">{profileDetails.name}</div>
                <div className="Email">{profileDetails.email}</div>
                <div className="Username">{profileDetails.username}</div>
                <div className="ChoicesContainer">
                  {choices.map((c) => {
                    return (
                      <div key={c.id} className="Choice">
                        {c.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/*  */}

            <div className="NewWeatherAppContainer">
              <div className="NewWeatherAppContainer_Top">
                <div className="Date">
                  {location ? location.localtime.split(" ")[0] : ""}
                </div>
                <div className="Time">
                  {location ? location.localtime.split(" ")[1] : ""}
                </div>
              </div>
              <div className="NewWeatherAppContainer_Bottom">
                <div className="size alignment1">
                  <img src={weatherType.icon} />
                  <div className="actualCondition">{weatherType.text}</div>
                </div>
                <div className="size alignment1">
                  <div className="Temperature">{condition.temp_c}&deg;C</div>
                  <div className="Thermometer">
                    {condition.pressure_mb}&#127777;mbar pressure{" "}
                  </div>
                </div>
                <div className="size notwant alignment1">
                  <div className="wind">
                    <img src={windImage} />
                    {condition.wind_kph}km/h Wind
                  </div>
                  <div className="humidity">
                    {" "}
                    <img src={rainDrop} />
                    {condition.humidity}% Humidity
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Notes">
            <div className="NotesContainer">
              <div className="NotesHeading">All notes</div>
              <div className="NotesContent">
                Notes are good to remember things, if notes are kept then it is
                easier to visualise things
              </div>
            </div>
          </div>
        </div>

        {/* TIMER */}
        <div className="Bottom">
          <TimerComponent timerStart={timerStart} timeSet={timeSet} />
          <TimerSetComponent
            setTimeSet={setTimeSet}
            setTimerStart={setTimerStart}
            timerStart={timerStart}
          />
        </div>
      </div>

      {/* NEWS */}
      <div className="RightContainer">
        <div className="RightContainer_InnerContainer">
          <div className="PictureContainer">
            <img className="PictureContainerImage" src={newsHead.urlToImage} />
            <div className="NewsHeading">{newsHead.title}</div>
          </div>
          <div className="NewsContent">
            <div className="ContentContainer">{newsHead.content}</div>
          </div>
        </div>
        <div onClick={handleNextPage} className="RightContainer_Button">
          <button className="RightContainer_Button_Button">Browse</button>
        </div>
      </div>
    </div>
  );
};

export default Page3;
