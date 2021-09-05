import { Row, Col, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { IAdditionalOption, IOrder, IVehicle } from "../../../../../shared/order";

export const ConfirmOrder = (props: any) => {
  const currentOrder: IOrder = useSelector((state: any) => state.order.currentOrder);

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
        <Col md={1} lg={1}></Col>
      </Row>
      <Row>
        <Col md={24} lg={24}>
          <div className="total">
            Vehicle rent: ${currentOrder.vehicle.price} <br />
            Additional fees: $
            {currentOrder.additionalOptions.map((x) => x.price).reduce((acc, curr) => (acc += curr), 0)}
            <br />
            Per day: approx. ${(currentOrder.totalPrice / currentOrder.totalDays).toFixed(2)} <br />
            Total for {currentOrder.totalDays} {currentOrder.totalDays === 1 ? "day" : "days"}: $
            {currentOrder.totalPrice} <br />
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
    </div>
  );
};
