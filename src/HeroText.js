import React from "react";
import ReactDOM from "react-dom";
import "./HeroText.css";
import image from "./images/audi.png";
import { Row, Col } from "antd";

class HeroText extends React.Component {
  render() {
    return (
      <div className="heroText">
        <Row>
          <Col xs={0} md={8} lg={7}>col</Col>
          <Col xs={24} md={8} lg={10}><h1 className="yellow">Rent A Car Now</h1></Col>
          <Col xs={0} md={8} lg={7}>col</Col>
        </Row>
        <Row>
          <Col xs={0} md={8} lg={7}>col</Col>
          <Col xs={24} md={8} lg={10}><h1 className="white">+387 000 000 000</h1></Col>
          <Col xs={0} md={8} lg={7}>col</Col>
        </Row>
        <Row>
          <Col xs={0} md={8} lg={7}>col</Col>
          <Col xs={24} md={8} lg={10}><h2>www.domain.com</h2></Col>
          <Col xs={0} md={8} lg={7}>col</Col>
        </Row>
        <Row>
          <Col xs={0} md={8} lg={7}>col</Col>
          <Col xs={24} md={8} lg={10}><img src={image} alt="Logo" /></Col>
          <Col xs={0} md={8} lg={7}>col</Col>
        </Row>
      </div>
    );
  }
}

export default HeroText;
