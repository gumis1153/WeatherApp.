import React from "react";
import fullCloud from "../icons/full-cloud.svg";
import mostClouds from "../icons/most-clouds.svg";
import mostSun from "../icons/most-sun.svg";
import sun from "../icons/sun.svg";

const WeatherResult = props => {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  const temperature = (
    <strong>{Math.floor(props.stateWeather.main.temp)} °C</strong>
  );

  const sky = () => {
    // console.log(props.stateWeather.clouds.all);
    if (props.stateWeather.clouds.all < 25) {
      return (
        <strong>
          <img src={sun} alt="Slonecznie" />
        </strong>
      );
    }
    if (props.stateWeather.clouds.all < 50) {
      return (
        <strong>
          <img src={mostSun} alt="Male zachmorzenie" />
        </strong>
      );
    }
    if (props.stateWeather.clouds.all < 75) {
      return (
        <strong>
          <img src={mostClouds} alt="Srednie zachmorzenie" />
        </strong>
      );
    }
    if (props.stateWeather.clouds.all < 100) {
      return (
        <strong>
          <img src={fullCloud} alt="Duze zachmorzenie" />
        </strong>
      );
    }
  };

  const wind = (
    <strong className="smallStrong">{props.stateWeather.wind.speed} m/s</strong>
  );
  const pressure = (
    <strong className="smallStrong">
      {Math.floor(props.stateWeather.main.pressure)} hPa
    </strong>
  );
  const sunrise = (
    <strong className="smallStrong">
      {new Date(props.stateWeather.sys.sunrise * 1000).toLocaleTimeString()}
    </strong>
  );
  const humidity = (
    <strong className="smallStrong">
      {props.stateWeather.main.humidity} %
    </strong>
  );
  const sunset = (
    <strong className="smallStrong">
      {new Date(props.stateWeather.sys.sunset * 1000).toLocaleTimeString()}
    </strong>
  );
  // const visibility = (
  //   <strong className="smallStrong">{props.stateWeather.visibility} m</strong>
  // );

  return (
    <>
      <h2 className="resultH2">{props.stateWeather.name}</h2>
      <section className="weatherResult">
        <div className="container">
          <span className="weatherNow">Teraz</span>
          <span className="weatherTemp">Temperatura{temperature}</span>
          <span className="weatherSky">Niebo{sky()}</span>
          <span className="weatherWind">Wiatr {wind}</span>
          <span className="weatherPress">Ciśnienie{pressure}</span>
          <span className="weatherSunrise">Wschód słońca {sunrise}</span>
          <span className="weatherHumi">Wilgotność {humidity}</span>
          <span className="weatherSunset">Zachód słońca {sunset}</span>
          {/* <span className="weatherVis">Widoczność{visibility}</span> */}
          <span className="weatherTime">
            {" "}
            Dziś{" "}
            <strong>
              {" "}
              {currentDate} | {currentTime}
            </strong>
          </span>
        </div>
      </section>
    </>
  );
};

export default WeatherResult;
