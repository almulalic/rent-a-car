import "./ShowCar.css";
import { Row, Col, Button } from "antd";
import { useDispatch } from "react-redux";
import { setSelectedVehicle } from "../../../../../../redux/Order/OrderReducer";

let cars = require("../../../../../../JSON/carInfo.json");

export const ShowCar = (props: any) => {
  const dispatch = useDispatch();

  const onBookActionClicked = (car: any) => {
    dispatch(setSelectedVehicle(car));
    props.setCurrentStep(1);
  };

  return (
    <>
      {cars
        .filter(
          (x: any) =>
            (props.filter.transmission === "" || x.transmission === props.filter.transmission) &&
            (props.filter.fuel === "" || x.fuel === props.filter.fuel) &&
            (props.filter.seats === "" || x.seats == props.filter.seats) &&
            (props.filter.doors === "" || x.doors == props.filter.doors)
        )
        .map((car: any) => (
          <div className="showCar2">
            <Row justify="space-between" align="middle">
              <Col xs={23} md={23} lg={23} className="header">
                <h1>
                  {car.manufacturer} {car.name}{" "}
                </h1>
              </Col>
              <Col xs={1} md={1} lg={1}></Col>
              <Col xs={24} sm={24} md={8} lg={8} className="colImgContainer">
                <img src={car.img} alt="car" />
              </Col>
              <Col xs={24} sm={24} md={8} lg={8}>
                <div className="specs" style={{ alignSelf: "flex-start", justifySelf: "flex-start" }}>
                  <Row className="rowic" justify="space-between">
                    <Col md={12} lg={6}>
                      <div className="specs2">{car.transmission}</div>
                    </Col>
                    <Col md={12} lg={6}>
                      <div className="specs2">{car.doors} doors</div>
                    </Col>
                    <Col md={12} lg={6}>
                      <div className="specs2">{car.seats} seats</div>
                    </Col>
                    <Col md={12} lg={6}>
                      <div className="specs2">{car.fuel}</div>
                    </Col>
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
              <Col xs={24} sm={24} md={6} lg={6}>
                <Row className="bookNow">
                  <Col xs={24} md={24} lg={12} style={{ textAlign: "center" }}>
                    <h1>${car.price} / Day</h1>
                  </Col>
                  <Col xs={24} md={24} lg={12} className="btnWrapCol">
                    <Button id="btn2" type="primary" size="large" onClick={() => onBookActionClicked(car)}>
                      Book Now
                    </Button>
                  </Col>
                  <Col xs={2} md={2} lg={2}></Col>
                </Row>
              </Col>
            </Row>
          </div>
        ))}
    </>
  );
};
