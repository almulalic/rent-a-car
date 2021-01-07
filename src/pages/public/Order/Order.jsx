import React, { useContext, useState } from "react";
import { Layout } from "antd";

import { Navbar } from "../../../components/Navbar/Navbar";
import { StepWizard } from "./components/StepWizard/StepWizard";

import { DriverAndPaymentForm } from "./components/DriverAndPaymentForm/DriverAndPaymentForm";

import "./Order.scss";

export const Order = () => {
  const { Header, Content } = Layout;

  return (
    <Layout className="Order-FormContainer">
      <Header>
        <Navbar />
      </Header>
      <Content>
        <StepWizard />
        <div className="Order-ContentContainer">
          <DriverAndPaymentForm />
        </div>
      </Content>
    </Layout>
  );
};
