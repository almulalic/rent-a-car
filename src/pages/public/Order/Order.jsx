import React, { useContext, useState } from "react";
import { Layout } from "antd";

import { Navbar } from "../../../components/Navbar/Navbar";
import { StepWizard } from "./components/StepWizard/StepWizard";

import { DriverAndPaymentForm } from "./components/DriverAndPaymentForm/DriverAndPaymentForm";
import { SearchCar } from "./components/SearchCar/SearchCar";
import "./Order.scss";

export const Order = () => {
  const { Header, Content } = Layout;

  return (
    <Layout className="Order-FormContainer">
      <Header>
        <Navbar /> // Glavni navbar
      </Header>
      <Content>
        <StepWizard /> // Step by step navbar
        <div className="Order-ContentContainer">
          {/* <DriverAndPaymentForm /> */}
          <SearchCar />
        </div>
      </Content>
    </Layout>
  );
};
