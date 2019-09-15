import React from "react";
import WeatherResult from "./WeatherResult";

class MainContent extends React.Component {
  state = {};

  handleCitySearch = e => {
    e.preventDefault();
    // console.log("szukanie");
    // console.log(this.props.citySearch);
    this.props.citySearch();
  };

  handleCityName = (e, props) => {
    let value = e.target.value;
    this.props.city(value);
    // console.log(this.props);
  };
  render() {
    return (
      <main>
        <form>
          <input
            type="text"
            placeholder="Wprowadź nazwę miasta"
            //   onChange={this.props}
            onChange={this.handleCityName}
          />
          <button onClick={this.handleCitySearch}>Sprawdź pogodę</button>
        </form>

        {this.props.stateWeather ? (
          <WeatherResult stateWeather={this.props.stateWeather} />
        ) : (
          <div className="containerCities">
            <button onClick={this.props.weather}>Warszawa</button>
            <button onClick={this.props.weather}>Gdańsk</button>
            <button onClick={this.props.weather}>Kraków</button>
            <button onClick={this.props.weather}>Szczecin</button>
            <button onClick={this.props.weather}>Łódź</button>
            <button onClick={this.props.weather}>Bydgoszcz</button>
            <button onClick={this.props.weather}>Wrocław</button>
            <button onClick={this.props.weather}>Lublin</button>
            <button onClick={this.props.weather}>Poznań</button>
            <button onClick={this.props.weather}>Katowice</button>
          </div>
        )}
      </main>
    );
  }
}

export default MainContent;
