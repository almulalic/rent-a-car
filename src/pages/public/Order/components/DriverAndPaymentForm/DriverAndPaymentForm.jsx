import React, { useState, useEffect, useMemo } from "react";
import { Row, Col, Card } from "antd";
import { DriversPerosnalInfoForm } from "./PersonalInfoForm";
import "./DriverAndPaymentForm.css";

export const DriverAndPaymentForm = () => {
  return (
    <section id="DriverAndPaymentForm">
      <Row type="flex" justify="center" align="top" gutter={[36, 24]}>
        <Col lg={{ span: 24 }} xl={{ span: 12 }}>
          <Card title="Enter your personal information">
            <DriversPerosnalInfoForm />
          </Card>
        </Col>
        <Col lg={{ span: 24 }} xl={{ span: 12 }}>
          <Card title="Enter payment information">
            <DriversPerosnalInfoForm />
          </Card>
        </Col>
      </Row>
    </section>
  );
};
