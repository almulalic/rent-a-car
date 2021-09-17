import { useEffect, useState } from "react";
import { Form, Input, Select as select, Button, Card, Radio, Typography, Alert } from "antd";
import CreditCardInput from "react-credit-card-input";

const formItemLayout = {
  wrapperCol: { span: 24 },
};

export const PaymentForm = ({ setAwaitingPaypalPayment, onCreditSuccess }) => {
  const Select = select;
  const [creditCardForm] = Form.useForm();

  const [creditCardState, setCreditCardState] = useState({
    cardNumber: "",
    cvc: "",
    expiresAt: "",
  });

  const handleCreditCardChange = (label, value) => {
    let state = Object.assign({}, creditCardState);
    state[label] = value.target.value;
    setCreditCardState(state);
  };

  const onCreditInfoSubmit = async () => {
    document.getElementsByClassName("sc-eCstlR NTHBi")[0].innerHTML = "TEST";
    await creditCardForm.validateFields(["cardholdersFullName"]).then(async () => {
      if (
        creditCardState.cardNumber.length != 0 &&
        creditCardState.cvc.length != 0 &&
        creditCardState.expiresAt.length != 0 &&
        document.getElementsByClassName("sc-eCstlR NTHBi").length == 0
      )
        onCreditSuccess();
    });
  };

  const creditCardInformationMarkup = (
    <Form form={creditCardForm} {...formItemLayout}>
      {/* Crdholders full name */}
      <Form.Item
        name="cardholdersFullName"
        label="Cardholders Full Name"
        rules={[{ required: true, message: "This field is required!" }]}
        hasFeedback
      >
        <Input name="cardholdersFullName" placeholder="John Doe" autoFocus />
      </Form.Item>

      {/* Card Info */}

      <Form.Item name="cardNumber" label="Card Number">
        <CreditCardInput
          cardNumberInputProps={{
            value: creditCardState.cardNumber,
            onChange: (e) => handleCreditCardChange("cardNumber", e),
          }}
          cardExpiryInputProps={{
            value: creditCardState.expiresAt,
            onChange: (e) => handleCreditCardChange("expiresAt", e),
          }}
          cardCVCInputProps={{
            value: creditCardState.cvc,
            onChange: (e) => handleCreditCardChange("cvc", e),
          }}
          containerClassName="cardInputContainer"
          fieldClassName="cardInput"
        />
      </Form.Item>
    </Form>
  );

  const [billingInformationForm] = Form.useForm();

  const onReset = () => {
    creditCardForm.resetFields();
    billingInformationForm.resetFields();
    let state = {
      cardNumber: "",
      cvc: "",
      expiresAt: "",
    };
    setCreditCardState(state);
  };

  const onSubmit = async () => {
    await onCreditInfoSubmit();
  };
  const { Text } = Typography;

  const paypalMarkup = (
    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
      <Text strong style={{ marginRight: "15px" }}>
        Proceed with paypal:
      </Text>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        target="_blank"
        method="post"
        onSubmit={() => setAwaitingPaypalPayment(true)}
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <input type="hidden" name="business" value="herschelgomez@xyzzyu.com" />

        <input type="hidden" name="cmd" value="_xclick" />

        <input type="hidden" name="item_name" value="Hot Sauce-12oz. Bottle" />
        <input type="hidden" name="amount" value="5.95" />
        <input type="hidden" name="currency_code" value="USD" />

        <input
          type="image"
          name="submit"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif"
          alt="Pay Now"
        />
        <img alt="" width="1" height="1" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" />
      </form>
    </div>
  );

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("creditCard");
  const onRadioChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const paymentOptionRadioMarkup = (
    <Radio.Group onChange={onRadioChange} defaultValue="creditCard">
      <Radio.Button value="creditCard">
        <div>
          <i className="fas fa-credit-card" style={{ marginRight: "5px" }} />
          <span>Credit Card</span>
        </div>
      </Radio.Button>
      <Radio.Button value="paypal">
        <div>
          <i className="fab fa-cc-paypal" style={{ marginRight: "5px" }} />
          <span>PayPal</span>
        </div>
      </Radio.Button>
      <Radio.Button value="cash">
        <div>
          <i className="far fa-money-bill-alt" style={{ marginRight: "5px" }} />
          <span>Cash</span>
        </div>
      </Radio.Button>
    </Radio.Group>
  );

  return (
    <>
      <Card title="Payment Method" extra={paymentOptionRadioMarkup}>
        {selectedPaymentMethod === "creditCard" ? (
          <>{creditCardInformationMarkup}</>
        ) : selectedPaymentMethod === "paypal" ? (
          paypalMarkup
        ) : (
          <>
            <div>
              <Alert
                message="If you want to pay with cash you will need to pay 30% of the price upfront. You will be contacted to pay the fee up to 15 days before the deadline."
                type="info"
                showIcon
              />
            </div>
            <br />
            {creditCardInformationMarkup}
          </>
        )}
      </Card>
      {selectedPaymentMethod !== "paypal" && (
        <div className="twoButtonRow">
          <Button danger type="dashed" onClick={onReset}>
            Reset
          </Button>
          <Button type="primary" onClick={onSubmit}>
            Submit
          </Button>
        </div>
      )}
    </>
  );
};
