import React, { useState, useEffect, useMemo } from "react";
import { Row, Col, Card } from "antd";
import { DriversPerosnalInfoForm } from "./DriversPerosnalInfoForm";
import "./DriverAndPaymentForm.scss";
import ReactTooltip from "react-tooltip";

export const DriverAndPaymentForm = () => {
  return (
    <section id="DriverAndPaymentForm">
      <Row justify="center" align="top" gutter={[36, 24]}>
        <Col lg={{ span: 24 }} xl={{ span: 12 }}>
          <Card title="Enter your personal information">
            <DriversPerosnalInfoForm />
          </Card>
        </Col>
        <Col lg={{ span: 24 }} xl={{ span: 12 }}>
          <Card title="Enter payment information" bordered={false}>
            <div
              data-tip="Temporarily diabled. Please fill out the form on the left side to continue"
              className="disabledOverlay"
            />
            <DriversPerosnalInfoForm />
          </Card>
        </Col>
      </Row>
      <ReactTooltip html place="top" border effect="solid" borderColor="#121212" />
    </section>
  );
};
