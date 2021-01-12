import React, { useContext, useEffect, useState } from "react";
import { Layout } from "antd";

import { Navbar } from "../../../components/Navbar/Navbar";
import { StepWizard } from "./components/StepWizard/StepWizard";

import { DriverAndPaymentForm } from "./components/DriverAndPaymentForm/DriverAndPaymentForm";
import { SearchCar } from "./components/SearchCar/SearchCar";
import { Details } from "./components/Details/Details";

import "./Order.scss";
import { PersonalizedFooter } from "./../../../components/Footer/Footer";

export const Order = () => {
  const { Header, Content } = Layout;
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Layout className="Order-FormContainer">
        <Navbar />
      <Content>
        <StepWizard currentStep={currentStep} setCurrentStep={setCurrentStep} />
        <div className="Order-ContentContainer">
          {/* {currentStep == 0 ? <SearchCar /> : <Details />} */}
          {currentStep == 0 ? <SearchCar /> : currentStep == 1 ? <Details /> : <DriverAndPaymentForm />}
        </div>
      </Content>
      <PersonalizedFooter />
    </Layout>
  );
};
