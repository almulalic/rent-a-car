import React from "react";
import "./ShowCar.css";
import { Row, Col, Button } from "antd";

let cars = require("../carInfo.json");

export const ShowCar = (props) => {
  console.log(
    props.filter.transMissin +
      "--" +
      props.filter.fuel +
      "--" +
      props.filter.doors +
      "--" +
      props.filter.seats
  );

  var cars2 = [];

  for (var i of cars) {
    if (
      (i.transmission == props.filter.transMissin || props.filter.transMissin == "") &&
      (i.fuel == props.filter.fuel || props.filter.fuel == "") &&
      (i.seats == props.filter.seats || props.filter.seats == "") &&
      (i.doors == props.filter.doors || props.filter.doors == "")
    )
      cars2.push(i);
  }

  return cars2.map((car) => (
    <div className="showCar2">
      <Row>
        <Col xs={8} md={8} lg={8}>
          <img src={car.img} alt="car" />
        </Col>
        <Col xs={8} md={8} lg={8}>
          <div className="specs">
            <Row>
              <Col xs={1} md={1} lg={1}></Col>
              <Col xs={23} md={23} lg={23}>
                <h1>
                  {" "}
                  {car.manufacturer} {car.name}{" "}
                </h1>
              </Col>
            </Row>
            <Row className="rowic">
              <Col xs={1} md={1} lg={1}></Col>
              <Col xs={4} md={4} lg={4}>
                <div className="specs2">{car.transmission}</div>
              </Col>
              <Col xs={2} md={2} lg={2}></Col>
              <Col xs={4} md={4} lg={4}>
                <div className="specs2">{car.doors} doors</div>
              </Col>
              <Col xs={2} md={2} lg={2}></Col>
              <Col xs={4} md={4} lg={4}>
                <div className="specs2">{car.seats} seats</div>
              </Col>
              <Col xs={2} md={2} lg={2}></Col>
              <Col xs={4} md={4} lg={4}>
                <div className="specs2">{car.fuel}</div>
              </Col>
              <Col xs={1} md={1} lg={1}></Col>
            </Row>
            <Row>
              <ul>
                <li>Unlimited kilometers</li>
                <li>Pickup Full & Return Full</li>
                <li>Snow Chains included</li>
                <li>Value Added Tax (VAT)</li>
              </ul>
            </Row>
          </div>
        </Col>
        <Col xs={1} md={1} lg={1}></Col>
        <Col xs={6} md={6} lg={6}>
          <Row className="bookNow">
            <Col xs={2} md={2} lg={2}></Col>
            <Col xs={10} md={10} lg={10}>
              {" "}
              <h1>$25 / Day</h1>
            </Col>
            <Col xs={10} md={10} lg={10}>
              <Button id="btn2" type="primary" size="large" onClick={() => props.setCurrentStep(1)}>
                Book Now
              </Button>
            </Col>
            <Col xs={2} md={2} lg={2}></Col>
          </Row>
        </Col>
        <Col xs={1} md={1} lg={1}></Col>
      </Row>
    </div>
  ));
};
