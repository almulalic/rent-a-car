import React from "react";
import "./HeroText.css";
import image from "../../../../images/audi.png";
import { Row, Col, Button } from "antd";

class HeroText extends React.Component {
  render() {
    return (
      <div className="heroText">
        <Row align="center">
          <Col xs={0} md={8} lg={7}></Col>
          <Col xs={24} md={8} lg={10}>
            <h1 className="yellow">Rent A Car Now</h1>
          </Col>
          <Col xs={0} md={8} lg={7}></Col>
        </Row>
        <Row>
          <Col xs={0} md={8} lg={7}></Col>
          <Col xs={24} md={8} lg={10}>
            <h1 className="white">+387 000 000 000</h1>
          </Col>
          <Col xs={0} md={8} lg={7}></Col>
        </Row>
        <Row align="center">
          <Col xs={0} md={8} lg={7}></Col>
          <Col align="center" xs={24} md={8} lg={10}>
            <Button
              id="landingButton"
              style={{
                color: "#ffbf00",
                background: "#101010",
              }}
              size="large"
              href="/order"
            >
              View Listings
            </Button>
          </Col>
          <Col xs={0} md={8} lg={7}></Col>
        </Row>
        <Row>
          <Col xs={0} md={8} lg={7}></Col>
          <Col xs={24} md={8} lg={10}>
            <h2>www.domain.com</h2>
          </Col>
          <Col xs={0} md={8} lg={7}></Col>
        </Row>
        <Row>
          <Col xs={0} md={8} lg={7}></Col>
          <Col xs={24} md={8} lg={10}>
            <img src={image} alt="Logo" />
          </Col>
          <Col xs={0} md={8} lg={7}></Col>
        </Row>
      </div>
    );
  }
}

export default HeroText;
