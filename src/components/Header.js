import React from "react";
import search from "../icons/search.svg";

class Header extends React.Component {
  handleReset = props => {
    this.props.reset();
  };
  render() {
    // console.log(this.props.stateWeather);
    return (
      <header>
        <h1>WeatherApp.</h1>
        {this.props.stateWeather.searched ? (
          <img onClick={this.handleReset} src={search} alt="Wyszukiwanie"></img>
        ) : null}
      </header>
    );
  }
}

export default Header;
