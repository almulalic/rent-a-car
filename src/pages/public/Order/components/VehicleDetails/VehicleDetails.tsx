import "./VehicleDetails.css";
import { Row, Col, Button } from "antd";
import { AdditionalOptions } from "./AdditionalOptions";

import { useDispatch, useSelector } from "react-redux";
import { Order } from "../../../../../shared/order";

export const VehicleDetails = (props: any) => {
  const currentOrder: Order = useSelector((state: any) => state.order.currentOrder);

  return (
    <div className="details">
      <Row>
        <Col md={24} lg={24} className="lastDiv">
          <Row>
            <Col md={24} lg={24}>
              <h1>
                {currentOrder.vehicle.manufacturer} {currentOrder.vehicle.name}
              </h1>
            </Col>
          </Row>
          <Row className="infos">
            <Row>
              <Col md={10} lg={10}>
                <Row>
                  <Col md={12} lg={12}>
                    <img src={currentOrder.vehicle.img} alt="golf" />
                  </Col>
                  <Col md={12} lg={12}>
                    {currentOrder.vehicle.price}$ / Day
                    <ul>
                      <li>Air conditioning</li>
                      <li>Manual transmission</li>
                      <li>Pet friendly</li>
                      <li>$leq; 100 Miles</li>
                      <li>Pick up full & Return full</li>
                    </ul>
                  </Col>
                </Row>
              </Col>

              {/* <Col md={12} lg={12}>
                <Row>
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
              </Col>
           */}
              <Col md={14} lg={14}>
                <h2>Additional option</h2>
                <AdditionalOptions />
              </Col>
            </Row>
          </Row>
          <div className="twoButtonRow">
            <Button type="primary" size="large" onClick={() => props.setCurrentStep(2)}>
              Continue
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
