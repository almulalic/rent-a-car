import React, { useContext, useState } from "react";

import { Steps, Modal, Button, Typography } from "antd";
import ReactTooltip from "react-tooltip";

import "../../Order.scss";
import "./StepWizard.scss";
import { useDispatch } from "react-redux";
import { resetOrder } from "../../../../../redux/Order/OrderReducer";

export const StepWizard = ({ currentStep, setCurrentStep }: any) => {
  const { Title, Text } = Typography;
  const { Step } = Steps as any;

  const getStepClass = (_index: number) => {
    return currentStep === _index ? "Active" : _index > currentStep ? "Disabled" : "Finished";
  };

  const renderTitle = (_title: string, _index: number) => {
    return (
      <Title level={4} className={`Step-Title Step-Title-${currentStep < _index ? "disabled" : "enabled"}`}>
        {_title}
      </Title>
    );
  };

  const renderDescription = (_description: string) => {
    return (
      <Text strong className="Step-Description">
        {_description}
      </Text>
    );
  };

  const renderIcon = (_icon: string) => {
    return (
      <div className="Step-Icon-Container">
        <i className="Step-Icon-Background fas fa-circle" />
        <i className={`Step-Icon ${_icon}`} />
      </div>
    );
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const changeCurrentStep = (step: number) => {
    if (step == 0) {
      setIsModalVisible(true);
    } else setCurrentStep(step);
  };

  return (
    <div className="Order-StepsContainer">
      <Steps current={currentStep} onChange={(step) => changeCurrentStep(step)}>
        <Step
          type="navigation"
          status={currentStep <= 0 ? "wait" : "finish"}
          className={`Step site-navigation-steps Step-${getStepClass(0)}`}
          title={renderTitle("Search", 0)}
          description={renderDescription("Search, filter and choose a vehicle")}
          onChange={setCurrentStep}
          icon={renderIcon("fas fa-search")}
          disabled={currentStep < 0}
          data-tip={
            currentStep == 0 ? "Select a vehicle to continue" : "Click here to search for a new vehicle. "
          }
        />
        <Step
          type="navigation"
          status={currentStep <= 1 ? "wait" : "finish"}
          className={`Step site-navigation-steps Step-${getStepClass(1)}`}
          title={renderTitle("Vehicle Details", 1)}
          description={renderDescription("Review selected vehicle")}
          onChange={setCurrentStep}
          icon={renderIcon("fas fa-clipboard-list")}
          disabled={currentStep < 1}
          data-tip={
            currentStep == 1
              ? "You are currently on the vehicle details step"
              : currentStep < 1
              ? "You need to select a vehicle first"
              : "Click here to change vehicle details"
          }
        />
        <Step
          type="navigation"
          status={currentStep <= 2 ? "wait" : "finish"}
          className={`Step site-navigation-steps Step-${getStepClass(2)}`}
          title={renderTitle("Confirm Order", 2)}
          description={renderDescription("Check if all looks good")}
          onChange={setCurrentStep}
          icon={renderIcon("fas fa-check")}
          disabled={currentStep < 2}
          data-tip={
            currentStep == 2
              ? "You are currently on the confirm order step"
              : currentStep < 2
              ? "You need to complete the previous two steps first"
              : "Click here to confirm order"
          }
        />
        <Step
          type="navigation"
          status={currentStep <= 3 ? "wait" : "finish"}
          className={`Step site-navigation-steps Step-${getStepClass(3)}`}
          title={renderTitle("Personal Info & Payment", 3)}
          description={renderDescription("Enter your details and payment info")}
          onChange={setCurrentStep}
          icon={renderIcon("fas fa-money-check-alt")}
          disabled={currentStep < 3}
          data-tip={
            currentStep == 2
              ? "You are currently on the personal info & payment step"
              : "You need to complete the previous three steps first"
          }
        />
      </Steps>
      <div>
        <ReactTooltip html place="top" border effect="solid" borderColor="#121212" />
        <Modal
          className="stepResetModal"
          title="Step reset"
          visible={isModalVisible}
          onOk={() => {
            setCurrentStep(0);
            dispatch(resetOrder());
            setIsModalVisible(false);
          }}
          onCancel={() => {
            setIsModalVisible(false);
          }}
        >
          <p>
            Going back to search step will reset your current progress (step 2 and 3) but will keep your
            informations and search filters.
            <br />
            <br />
            Are you sure that you want to continue?
          </p>
        </Modal>
      </div>
    </div>
  );
};
