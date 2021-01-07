import { Steps, Typography } from "antd";
import React, { useContext } from "react";
import { StepContext } from "../../OrderContext";

import "../../Order.scss";
export const CustomStep = ({ status, title, description, icon, index }) => {
  const { Step } = Steps;
  const { Text, Title } = Typography;

  const { currentStep, setCurrentStep } = useContext(StepContext);

  const getStepClass = (_index) => {
    return currentStep === _index ? "Active" : _index > currentStep ? "Disabled" : "Finished";
  };

  return (
    // <Step
    //   type="navigation"
    //   status={status}
    //   className={`site-navigation-steps Step-${getStepClass(index)}`}
    //   title={
    //     <Title level={4} className="Step-Title">
    //       {title}
    //     </Title>
    //   }
    //   description={
    //     <Text strong className="Step-Description">
    //       {description}
    //     </Text>
    //   }
    //   onChange={setCurrentStep}
    //   icon={<i className={icon} />}
    // />
    <Step
      className="Step"
      type="navigation"
      status="wait"
      className={`site-navigation-steps Step-${getStepClass(2)}`}
      title={
        <Title level={4} className="Step-Title Step-Title">
          Review
        </Title>
      }
      description={
        <Text strong className="Step-Description">
          Check if all looks good!
        </Text>
      }
      onChange={setCurrentStep}
      icon={<i className="Step-FS-Icon fas fa-check-circle"></i>}
      disabled={currentStep < 2}
    />
  );
};
