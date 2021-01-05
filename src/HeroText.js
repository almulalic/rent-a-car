import React from "react";
import ReactDOM from "react-dom";
import "./HeroText.css";
import image from './images/audi.png';

class HeroText extends React.Component {
  render() {
    return (
      <div className="heroText">
        <h1 className="yellow">Rent A Car Now</h1>
        <h1 className="white">+387 000 000 000</h1>
        <h2>www.domain.com</h2>

        <img src={image} alt="Logo" />
      </div>
    );
  }
}

export default HeroText;
