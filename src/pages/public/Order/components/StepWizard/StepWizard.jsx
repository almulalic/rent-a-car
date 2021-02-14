import React, { useContext, useState } from "react";

import { Steps, Button, Typography } from "antd";
import { StepContext } from "../../OrderContext";

import "../../Order.scss";
import "./StepWizard.scss";

export const StepWizard = ({ currentStep, setCurrentStep }) => {
  const { Title, Text } = Typography;
  const { Step } = Steps;

  const getStepClass = (_index) => {
    return currentStep === _index ? "Active" : _index > currentStep ? "Disabled" : "Finished";
  };

  const renderTitle = (_title, _index) => {
    return (
      <Title level={4} className={`Step-Title Step-Title-${currentStep < _index ? "disabled" : "enabled"}`}>
        {_title}
      </Title>
    );
  };

  const renderDescription = (_description) => {
    return (
      <Text strong className="Step-Description">
        {_description}
      </Text>
    );
  };

  const renderIcon = (_icon) => {
    return (
      <div className="Step-Icon-Container">
        <i className="Step-Icon-Background fas fa-circle" />
        <i className={`Step-Icon ${_icon}`} />
      </div>
    );
  };

  return (
    <div className="Order-StepsContainer">
      <Steps current={currentStep} onChange={setCurrentStep}>
        <Step
          className="Step"
          type="navigation"
          status={currentStep <= 0 ? "wait" : "finish"}
          className={`site-navigation-steps Step-${getStepClass(0)}`}
          title={renderTitle("Search", 0)}
          description={renderDescription("Search, filter and choose a vehicle")}
          onChange={setCurrentStep}
          icon={renderIcon("fas fa-search")}
          disabled={currentStep < 0}
        />
        <Step
          className="Step"
          type="navigation"
          status={currentStep <= 1 ? "wait" : "finish"}
          className={`site-navigation-steps Step-${getStepClass(1)}`}
          title={renderTitle("Vehicle Details", 1)}
          description={renderDescription("Review selected vehicle")}
          onChange={setCurrentStep}
          icon={renderIcon("fas fa-clipboard-list")}
          disabled={currentStep < 1}
        />
        <Step
          className="Step"
          type="navigation"
          status={currentStep <= 2 ? "wait" : "finish"}
          className={`site-navigation-steps Step-${getStepClass(2)}`}
          title={renderTitle("Confirm Order", 2)}
          description={renderDescription("Check if all looks good")}
          onChange={setCurrentStep}
          icon={renderIcon("fas fa-check")}
          disabled={currentStep < 2}
        />
        <Step
          className="Step"
          type="navigation"
          status={currentStep <= 3 ? "wait" : "finish"}
          className={`site-navigation-steps Step-${getStepClass(3)}`}
          title={renderTitle("Personal Info & Payment", 3)}
          description={renderDescription("Enter your details and payment info")}
          onChange={setCurrentStep}
          icon={renderIcon("fas fa-money-check-alt")}
          disabled={currentStep < 3}
        />
      </Steps>
      {/* <Button onClick={() => setCurrentStep(currentStep + 1)}>Next</Button> */}
    </div>
  );
};
