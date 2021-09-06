import React, { useState, useEffect, useMemo } from "react";
import { Row, Col, Card, Button } from "antd";
import { DriversPerosnalInfoForm } from "./DriversPerosnalInfoForm";
import "./DriverAndPaymentForm.scss";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalInfo } from "../../../../../redux/Order/OrderReducer";

export const DriverAndPaymentForm = () => {
  const dispatch = useDispatch();

  const [isPersonalFormActive, setPersonalFormActive] = useState(true);
  const [isPaymentFormActive, setPaymentFormActive] = useState(false);

  const onResetPersonalForm = () => {
    setPersonalFormActive(true);
    setPaymentFormActive(false);
  };

  const onSuccessfulSubmitPersonalForm = (personalInfo) => {
    dispatch(setPersonalInfo(personalInfo));
    setPaymentFormActive(true);
  };

  return (
    <section id="DriverAndPaymentForm">
      <Row justify="center" align="top" gutter={[36, 24]}>
        <Col lg={{ span: 24 }} xl={{ span: 12 }}>
          <Card title="Enter your personal information" bordered={isPersonalFormActive}>
            <div className="completedOverlay" style={{ display: !isPersonalFormActive ? "flex" : "none" }}>
              <CheckCircleOutlined className="completedIcon" />
              <br />
              <span className="completedText"> Completed!</span>
              <span className="completedTextSmall">FIll out the form on the right side to continue</span>
              <br />
              <Button danger type="dashed" onClick={onResetPersonalForm}>
                Reset
              </Button>
            </div>

            <DriversPerosnalInfoForm
              setPersonalFormActive={setPersonalFormActive}
              onSuccessfulSubmitPersonalForm={onSuccessfulSubmitPersonalForm}
            />
          </Card>
        </Col>
        <Col lg={{ span: 24 }} xl={{ span: 12 }}>
          <Card title="Enter payment information" bordered={isPaymentFormActive}>
            <div className="disabledOverlay" style={{ display: !isPaymentFormActive ? "flex" : "none" }}>
              <CloseCircleOutlined className="disabledIcon" />
              <br />
              <span className="disabledText">Locked!</span>
              <span className="disabledTextSmall">FIll out the form on the left side to continue</span>
            </div>

            <DriversPerosnalInfoForm
              setPersonalFormActive={setPersonalFormActive}
              onSuccessfulSubmitPersonalForm={onSuccessfulSubmitPersonalForm}
            />
          </Card>
        </Col>
      </Row>
    </section>
  );
};
