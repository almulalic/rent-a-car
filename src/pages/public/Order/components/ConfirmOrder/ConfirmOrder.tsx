import { Row, Col, Button } from "antd";
import { useSelector } from "react-redux";
import { IAdditionalOption, IOrder } from "../../../../../redux/Order/models";

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
    <div className="details">
      <Row>
        <Col md={1} lg={1}></Col>
        <Col md={22} lg={22}>
          <div className="priceSummary">
            <ul>
              {Object.keys(currentOrder.vehicle).map((x: string) => {
                return (
                  x != "img" &&
                  x != "price" && (
                    <li>
                      {x}:{currentOrder.vehicle[x]}
                    </li>
                  )
                );
              })}
            </ul>
          </div>
        </Col>
        <Col md={1} lg={1}></Col>
      </Row>
      <Row>
        <Col md={1} lg={1}></Col>
        <Col md={22} lg={22}>
          <div className="billInfo">
            <ul>
              {currentOrder.additionalOptions.map((x: IAdditionalOption) => {
                return x.value === "pet" || x.value === "driver" ? (
                  <li>
                    {x.label}: ${x.price} x {currentOrder.totalDays}{" "}
                    {currentOrder.totalDays === 1 ? "day" : "days"} = ${x.price * currentOrder.totalDays}
                  </li>
                ) : (
                  <li>
                    {x.label}: ${x.price}
                  </li>
                );
              })}
            </ul>
          </div>
        </Col>
        <Col md={22} lg={22}>
          <div className="billInfo">
            Pickup address: {pickupAddress} <br />
            Dropoff addres: {dropoffAddress}
          </div>
        </Col>
        <Col md={1} lg={1}></Col>
      </Row>
      <Row>
        <Col md={24} lg={24}>
          <div className="total">
            Vehicle rent: ${currentOrder.vehicle.price} <br />
            Additional fees: $
            {currentOrder.additionalOptions
              .map((x: IAdditionalOption) => x.price)
              .reduce((acc: number, curr: number) => (acc += curr), 0)}
            <br />
            Per day: approx. ${(currentOrder.totalPrice / currentOrder.totalDays).toFixed(2)} <br />
            Total for {currentOrder.totalDays} {currentOrder.totalDays === 1 ? "day" : "days"}: $
            {currentOrder.totalPrice} <br />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={24} lg={24}>
          <Button id="btn3" type="primary" size="large" onClick={onConfirmAction}>
            Proceed to payment
          </Button>
        </Col>
      </Row>
    </div>
  );
};
