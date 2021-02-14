import { React, useState } from "react";
import "./Details.css";
import { Row, Col, Button } from "antd";
import image from "./golf6.png";

// import { FilterWrap } from "./components/FilterWrap";
// import { ShowCar } from "./components/ShowCar";

export const Details = (props) => {
  return (
    <div className="details">
      <Row>
        <Col md={8} lg={8}>
          <Row>
            <Col md={1} lg={1}></Col>
            <Col md={22} lg={22}>
              <div className="priceSummary">Price summary</div>
            </Col>
            <Col md={1} lg={1}></Col>
          </Row>
          <Row>
            <Col md={1} lg={1}></Col>
            <Col md={22} lg={22}>
              <div className="billInfo">Some bill info</div>
            </Col>
            <Col md={1} lg={1}></Col>
          </Row>
          <Row>
            <Col md={24} lg={24}>
              <div className="total">
                Total <span>$25</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={24} lg={24}>
              <Button id="btn3" type="primary" size="large" onClick={() => props.setCurrentStep(4)}>
                Proceed to payment
              </Button>
            </Col>
          </Row>
        </Col>
        <Col md={1} lg={1}></Col>
        <Col md={15} lg={15} className="lastDiv">
          <Row>
            <Col md={24} lg={24}>
              <h1>Volkswagen Golf</h1>
            </Col>
          </Row>
          <Row className="infos">
            <Col md={7} lg={7}>
              <img src={image} alt="golf" />
            </Col>
            <Col md={3} lg={3}></Col>
            <Col md={7} lg={7}>
              <h2>Pick up</h2>
              <p>
                Sarajevo, address
                <br />
                Bosnia and Herzegovina
                <br />
                12/02/2021
              </p>
            </Col>
            <Col md={7} lg={7}>
              <h2>Drop off</h2>
              <p>
                Sarajevo, address
                <br />
                Bosnia and Herzegovina
                <br />
                12/02/2021
              </p>
            </Col>
          </Row>
          <Row className="infos">
            <Col md={7} lg={7}>
              <ul>
                <li>Air conditioning</li>
                <li>Manual transmission</li>
                <li>Pick up full & Return full</li>
              </ul>
            </Col>
            <Col md={3} lg={3}></Col>
            <Col md={7} lg={7}>
              <h2>Additional option</h2>
            </Col>
            <Col md={7} lg={7}>
              <Button id="btn4" type="primary" size="large" onClick={() => props.setCurrentStep(4)}>
                Add
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
