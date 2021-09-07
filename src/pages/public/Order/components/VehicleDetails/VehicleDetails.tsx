import "./VehicleDetails.css";
import { Row, Col, Button, Form } from "antd";
import { AdditionalOptions } from "./AdditionalOptions";

import { useSelector } from "react-redux";
import { Order } from "../../../../../redux/Order/models/Order";

export const VehicleDetails = (props: any) => {
  const currentOrder: Order = useSelector((state: any) => state.order.currentOrder);

  const [form] = Form.useForm();

  const validateForm = async () => {
    await form.validateFields(["pickupAddress", "dropoffAddress"]);
  };

  const onSumit = async () => {
    await validateForm();
    if (form.getFieldsError(["pickupAddress", "dropoffAddress"]).every((x) => x.errors.length === 0))
      props.setCurrentStep(2);
  };

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
                    <img src={currentOrder.vehicle.img} className="vehicleImg" alt="golf" />
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

              <Col md={14} lg={14}>
                <h2>Additional option</h2>
                <AdditionalOptions form={form} />
              </Col>
            </Row>
          </Row>
          <div className="twoButtonRow">
            <Button type="primary" size="large" onClick={onSumit}>
              Continue
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
