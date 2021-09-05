import React, { useContext, useEffect, useState } from "react";
import { Layout } from "antd";

import { Navbar } from "../../../components/Navbar/Navbar";
import { StepWizard } from "./components/StepWizard/StepWizard";

import { DriverAndPaymentForm } from "./components/DriverAndPaymentForm/DriverAndPaymentForm";
import { SearchCar } from "./components/SearchCar/SearchCar";
import { VehicleDetails } from "./components/VehicleDetails/VehicleDetails";

import "./Order.scss";
import { PersonalizedFooter } from "../../../components/Footer/Footer";
import { ConfirmOrder } from "./components/ConfirmOrder/ConfirmOrder";

export const Order = () => {
  const { Content } = Layout;
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Layout className="Order-FormContainer">
      <Navbar />
      <Content>
        <StepWizard currentStep={currentStep} setCurrentStep={setCurrentStep} />
        <div className="Order-ContentContainer">
          {currentStep == 0 ? (
            <SearchCar setCurrentStep={setCurrentStep} />
          ) : currentStep == 1 ? (
            <VehicleDetails setCurrentStep={setCurrentStep} />
          ) : currentStep == 2 ? (
            <ConfirmOrder setCurrentStep={setCurrentStep} />
          ) : (
            <DriverAndPaymentForm />
          )}
        </div>
      </Content>
      <PersonalizedFooter />
    </Layout>
  );
};
