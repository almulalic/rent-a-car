import { createContext } from "react";

export interface IStepContext {
  currentStep: number;
  setCurrentStep: any;
}

const defaultStepState: IStepContext = {
  currentStep: 0,
  setCurrentStep: null,
};

export const StepContext = createContext(defaultStepState);
