import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import WeatherResult from "./WeatherResult";

class App extends Component {
  state = {
    weather: null,
    city: "",
    searched: false
  };

  reset = () => {
    this.setState({
      searched: false
    });
  };

  cityUpdate = value => {
    let city = value;
    // console.log(`City ${city}`);
    this.setState({
      city
    });
  };

  citySearch = value => {
    const cityName = this.state.city
      .replace(/ą/g, "a")
      .replace(/Ą/g, "A")
      .replace(/ć/g, "c")
      .replace(/Ć/g, "C")
      .replace(/ę/g, "e")
      .replace(/Ę/g, "E")
      .replace(/ł/g, "l")
      .replace(/Ł/g, "L")
      .replace(/ń/g, "n")
      .replace(/Ń/g, "N")
      .replace(/ó/g, "o")
      .replace(/Ó/g, "O")
      .replace(/ś/g, "s")
      .replace(/Ś/g, "S")
      .replace(/ż/g, "z")
      .replace(/Ż/g, "Z")
      .replace(/ź/g, "z")
      .replace(/Ź/g, "Z");
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=3295c5f635348e3fcf8dad79da355b2f`;
    // console.log(API);
    fetch(API)
      .then(response => {
        if (response.status === 200) {
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(data => {
        // console.log(typeof data);
        this.setState({
          weather: data,
          searched: true
        });
      })
      .catch(error => {
        alert("Proszę wprowadzić poprawną nazwę miasta");
        console.log(error);
        this.setState({
          city: ""
        });
      });
  };

  // handleWeatherSearchFetch = e => {
  //   e.preventDefault();
  //   console.log("działa wyszukiwanie");
  // };

  handleWeatherFetch = e => {
    const cityName = e.target.textContent
      .replace(/ą/g, "a")
      .replace(/Ą/g, "A")
      .replace(/ć/g, "c")
      .replace(/Ć/g, "C")
      .replace(/ę/g, "e")
      .replace(/Ę/g, "E")
      .replace(/ł/g, "l")
      .replace(/Ł/g, "L")
      .replace(/ń/g, "n")
      .replace(/Ń/g, "N")
      .replace(/ó/g, "o")
      .replace(/Ó/g, "O")
      .replace(/ś/g, "s")
      .replace(/Ś/g, "S")
      .replace(/ż/g, "z")
      .replace(/Ż/g, "Z")
      .replace(/ź/g, "z")
      .replace(/Ź/g, "Z");
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=3295c5f635348e3fcf8dad79da355b2f`;
    // console.log(API);
    fetch(API)
      .then(response => {
        if (response.status === 200) {
          return response;
        }
        throw Error(response);
      })
      .then(response => response.json())
      .then(data => {
        // console.log(typeof data);
        this.setState({
          weather: data,
          searched: true
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const weatherHeader = this.state;
    const stateWeather = this.state.weather;
    const weather = this.handleWeatherFetch;
    const searched = this.state.searched;
    const reset = this.reset;
    // const weatherSearch = this.handleWeatherSearchFetch;
    return (
      <>
        <Header stateWeather={weatherHeader} reset={reset} />

        {this.state.searched ? (
          <WeatherResult stateWeather={stateWeather} />
        ) : (
          <MainContent
            weather={weather}
            // weatherSeach={weatherSearch}
            city={this.cityUpdate}
            searched={searched}
            citySearch={this.citySearch}
          />
        )}
        <Footer />
      </>
    );
  }
}

export default App;
