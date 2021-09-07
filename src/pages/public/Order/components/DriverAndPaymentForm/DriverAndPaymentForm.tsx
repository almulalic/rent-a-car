import React, { useState, useEffect, useMemo } from "react";
import { Row, Col, Card, Button } from "antd";
import { DriversPerosnalInfoForm } from "./DriversPerosnalInfoForm";
import "./DriverAndPaymentForm.scss";
import { CheckCircleOutlined, CloseCircleOutlined, LoadingOutlined, SyncOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalInfo } from "../../../../../redux/Order/OrderReducer";
import { PaymentForm } from "./PaymentForm";

export const DriverAndPaymentForm = () => {
  const dispatch = useDispatch();

  const [isPersonalFormActive, setPersonalFormActive] = useState(true);
  const [isPaymentFormActive, setPaymentFormActive] = useState(false);

  const onResetPersonalForm = () => {
    setPersonalFormActive(true);
    setPaymentFormActive(false);
    setAwaitingPaypalPayment(false);
  };

  const onSuccessfulSubmitPersonalForm = (personalInfo) => {
    dispatch(setPersonalInfo(personalInfo));
    setPaymentFormActive(true);
  };

  const [loadCacheDataAction, setLoadCachedDataAction] = useState(false);
  const loadCachedData = () => {
    setLoadCachedDataAction(!loadCacheDataAction);
  };

  const [isAwaitingPaypalPayment, setAwaitingPaypalPayment] = useState(false);

  return (
    <section id="DriverAndPaymentForm">
      <Row justify="center" align="top" gutter={[36, 24]}>
        <Col lg={{ span: 24 }} xl={{ span: 12 }}>
          <Card
            title="Enter your personal information"
            bordered={isPersonalFormActive}
            extra={<Button onClick={loadCachedData}>Load Last</Button>}
          >
            <div className="completedOverlay" style={{ display: !isPersonalFormActive ? "flex" : "none" }}>
              <CheckCircleOutlined className="completedIcon" />
              <br />
              <span className="completedText"> Completed!</span>
              <span className="completedTextSmall">FIll out the form on the right side to continue</span>
              <br />
              <Button ghost type="dashed" onClick={onResetPersonalForm}>
                Edit
              </Button>
            </div>

            <DriversPerosnalInfoForm
              setPersonalFormActive={setPersonalFormActive}
              onSuccessfulSubmitPersonalForm={onSuccessfulSubmitPersonalForm}
              loadCacheDataAction={loadCacheDataAction}
            />
          </Card>
        </Col>
        <Col lg={{ span: 24 }} xl={{ span: 12 }}>
          <Card title="Enter payment information" bordered={isPaymentFormActive && !isAwaitingPaypalPayment}>
            {isAwaitingPaypalPayment ? (
              <div className="infoOverlay" style={{ display: isAwaitingPaypalPayment ? "flex" : "none" }}>
                <SyncOutlined spin className="infoIcon" />
                <br />
                <span className="infoText">Awaiting Payment...</span>
                <span className="infoTextSmall">Follow the steps on the link that was opened in new tab</span>
                <br />
                <Button ghost type="dashed" onClick={() => setAwaitingPaypalPayment(false)}>
                  Cancle
                </Button>
              </div>
            ) : (
              !isPaymentFormActive && (
                <div className="disabledOverlay" style={{ display: !isPaymentFormActive ? "flex" : "none" }}>
                  <CloseCircleOutlined className="disabledIcon" />
                  <br />
                  <span className="disabledText">Locked!</span>
                  <span className="disabledTextSmall">FIll out the form on the left side to continue</span>
                </div>
              )
            )}

            <PaymentForm setAwaitingPaypalPayment={setAwaitingPaypalPayment} />
          </Card>
        </Col>
      </Row>
    </section>
  );
};
