import { Row, Col, Button } from "antd";
import { useSelector } from "react-redux";
import { IAdditionalOption, IOrder } from "../../../../../redux/Order/models";

import "./ConfirmOrder.scss";
export interface IConfirmOrderStoreProps {
  currentOrder: IOrder;
  pickupAddress: string;
  dropoffAddress: string;
}

export const ConfirmOrder = (props: any) => {
  const { currentOrder, pickupAddress, dropoffAddress } = useSelector((state: any) => state.order);

  const onConfirmAction = () => {
    props.setCurrentStep(4);
  };

  return (
    <div className="searchCar">
      <div className="bgimg"></div>
      <div className="details confirmOrder">
        <Row className="widthWrap">
          <Col xs={24} md={24} lg={24}>
            <Row>
              <Col xs={24} md={24} lg={24}>
                <div className="priceSummary">
                  <h1>Car overview</h1>
                  <ul>
                    {Object.keys(currentOrder.vehicle).map((x: string) => {
                      return (
                        x != "img" &&
                        x != "price" && (
                          <li>
                            <span className="priceSummaryKey">{x}</span>:{"  "}
                            <span className="priceSummaryValue">{currentOrder.vehicle[x]}</span>
                          </li>
                        )
                      );
                    })}
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={24} md={24} lg={24}>
            {currentOrder.additionalOptions.length != 0 && (
              <div className="billInfo">
                <h1>Bill overview</h1>
                <ul>
                  {currentOrder.additionalOptions.map((x: IAdditionalOption) => {
                    return x.value === "pet" || x.value === "driver" ? (
                      <li>
                        <span className="priceSummaryKey">{x.label}: </span>
                        <span style={{ fontStyle: "italic" }}>
                          ${x.price} &#xd7; {currentOrder.totalDays}
                          {currentOrder.totalDays === 1 ? "   day" : "   days"} =
                        </span>
                        <span className="priceSummaryValue">
                          {"   "}${x.price * currentOrder.totalDays}
                        </span>
                      </li>
                    ) : (
                      <li>
                        <span className="priceSummaryKey"> {x.label}:</span>{" "}
                        <span className="priceSummaryValue">${x.price}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </Col>

          <Col xs={24} md={24} lg={24}>
            <div className="pickupDropoff">
              <h1>Pickup {"&"} Dropoff</h1>
              <ul>
                <li>
                  <span className="priceSummaryKey">Pickup address: </span>
                  <span className="priceSummaryValue">{pickupAddress}</span>
                </li>
                <li>
                  <span className="priceSummaryKey">Dropoff addres: </span>
                  <span className="priceSummaryValue">{dropoffAddress}</span>
                </li>
              </ul>
            </div>
          </Col>

          <Col xs={24} md={24} lg={24}>
            <div className="totalInfo">
              <div className="total">
                <span className="priceSummaryKey">Vehicle rent: </span>
                <span className="priceSummaryValue">
                  {"   "} ${currentOrder.vehicle.price}
                </span>
                <br />
                <span className="priceSummaryKey">Additional fees: </span>
                <span className="priceSummaryValue">
                  {"   "}$
                  {currentOrder.additionalOptions
                    .map((x: IAdditionalOption) => x.price)
                    .reduce((acc: number, curr: number) => (acc += curr), 0)}
                </span>
                <br />
                <span className="priceSummaryKey">Per day: approx. : </span>
                <span className="priceSummaryValue">
                  {"   "} ${(currentOrder.totalPrice / currentOrder.totalDays).toFixed(2)} <br />
                </span>
                <div className="totalll">
                  <span className="priceSummaryKey">
                    Total for {currentOrder.totalDays} {currentOrder.totalDays === 1 ? "day" : "days"}:
                  </span>
                  <span className="priceSummaryValue">
                    {"   "} ${currentOrder.totalPrice} <br />
                  </span>
                </div>
                <Button id="btn3" type="primary" size="large" onClick={onConfirmAction}>
                  Proceed to payment
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
