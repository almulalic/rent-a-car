import orderWizardReducer from "./OrderWizard/OrderWizardSlice";

const rootReducer = combineReducers({
  orderWizard: orderWizardReducer,
});

export default rootReducer;
