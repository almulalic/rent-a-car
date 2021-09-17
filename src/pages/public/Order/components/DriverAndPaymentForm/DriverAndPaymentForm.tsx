import React, { useState, useEffect, useMemo } from "react";
import { Row, Col, Card, Button, Tooltip, Modal, Result } from "antd";
import { DriversPerosnalInfoForm } from "./DriversPerosnalInfoForm";
import "./DriverAndPaymentForm.scss";
import { CheckCircleOutlined, CloseCircleOutlined, LoadingOutlined, SyncOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalInfo } from "../../../../../redux/Order/OrderReducer";
import { PaymentForm } from "./PaymentForm";
import ReactTooltip from "react-tooltip";
import { useHistory } from "react-router-dom";

export const DriverAndPaymentForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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

  const isLoggedIn = localStorage.getItem("token") != undefined;

  const [loadCacheDataAction, setLoadCachedDataAction] = useState(false);
  const loadCachedData = () => {
    if (isLoggedIn) setLoadCachedDataAction(!loadCacheDataAction);
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const [isAwaitingPaypalPayment, setAwaitingPaypalPayment] = useState(false);

  useEffect(() => {
    if (isAwaitingPaypalPayment) {
      document.addEventListener("visibilitychange", (event) => {
        setTimeout(() => {
          setModalVisible(true);
        }, 2000);
      });
    }
  }, [isAwaitingPaypalPayment]);

  const onCreditSuccess = () => {
    setAwaitingPaypalPayment(true);
    setTimeout(() => {
      setModalVisible(true);
    }, 2000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="searchCar">
      <div className="bgimg"></div>
      <section id="DriverAndPaymentForm">
        <Row justify="center" align="top" gutter={[36, 24]}>
          <Col lg={{ span: 24 }} xl={{ span: 12 }}>
            <Card
              title="Enter your personal information"
              bordered={isPersonalFormActive}
              style={{ background: "#f4f3f0" }}
              extra={
                <Tooltip
                  title={
                    isLoggedIn
                      ? "Click here to load your personal data"
                      : "You must be logged in to load your data"
                  }
                >
                  <Button disabled={!isLoggedIn} onClick={loadCachedData}>
                    Load Data
                  </Button>
                </Tooltip>
              }
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
            <Card
              title="Enter payment information"
              bordered={isPaymentFormActive && !isAwaitingPaypalPayment}
              style={{ background: "#f4f3f0" }}
            >
              {isAwaitingPaypalPayment ? (
                <div className="infoOverlay" style={{ display: isAwaitingPaypalPayment ? "flex" : "none" }}>
                  <SyncOutlined spin className="infoIcon" />
                  <br />
                  <span className="infoText">Awaiting Payment...</span>
                  <span className="infoTextSmall">
                    Follow the steps on the link that was opened in new tab
                  </span>
                  <br />
                </div>
              ) : (
                !isPaymentFormActive && (
                  <div
                    className="disabledOverlay"
                    style={{
                      display: !isPaymentFormActive ? "flex" : "none",
                    }}
                  >
                    <CloseCircleOutlined className="disabledIcon" />
                    <br />
                    <span className="disabledText">Locked!</span>
                    <span className="disabledTextSmall">FIll out the form on the left side to continue</span>
                  </div>
                )
              )}

              <PaymentForm
                setAwaitingPaypalPayment={setAwaitingPaypalPayment}
                onCreditSuccess={onCreditSuccess}
              />
            </Card>
          </Col>
        </Row>
        <Modal title="Success!" centered visible={isModalVisible} footer={null}>
          <Result
            status="success"
            title="You have successfully reserved your car!"
            subTitle="We are eagerly awaiting for your visit. Happy trip!"
            className="successfullModal"
            extra={[
              <Button ghost key="console" onClick={() => history.push("/landing")}>
                Go to landing
              </Button>,
            ]}
          />
        </Modal>
      </section>
    </div>
  );
};
