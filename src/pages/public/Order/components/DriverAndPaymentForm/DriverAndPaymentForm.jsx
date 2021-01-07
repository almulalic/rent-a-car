import React, { useState, useEffect, useMemo } from "react";
import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber, Button } from "antd";

import countryInfo from "./countryInfo.json";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

export const DriverAndPaymentForm = () => {
  const { Option } = Select;
  const [form] = Form.useForm();

  //#region Country & PhonePrefix

  const [selectedCountry, setSelectedCountry] = useState({ name: null, code: null, phonePrefixes: [] });

  const onCountrySelectChange = (value) => {
    setSelectedCountry(countryInfo.filter((x) => x.code == value)[0]);
  };

  const countryList = useMemo(() => {
    return countryInfo.map((x) => {
      return <Option value={x.code}>{x.name}</Option>;
    });
  }, []);

  const phonePrefixOptions = useMemo(() => {
    return (
      <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }} placeholder="+00" disabled={selectedCountry.phonePrefixes.length === 0}>
          {selectedCountry.phonePrefixes.map((x) => {
            return <Option value={x}>+${x}</Option>;
          })}
        </Select>
      </Form.Item>
    );
  }, [selectedCountry]);

  //#endregion

  const onChange = (x) => {
    console.log(x);
  };

  const onCheck = async () => {
    form.validateFields(["email"]);
    form.validateFields(["confirmEmail"]);
  };

  return (
    <Form form={form} {...formItemLayout}>
      {/* First Name */}
      <Form.Item label="First Name" hasFeedback>
        <Input placeholder="John" id="error" />
      </Form.Item>

      {/* Last Name */}
      <Form.Item label="Last Name" hasFeedback>
        <Input placeholder="John" id="error" />
      </Form.Item>

      {/* Age */}
      <Form.Item label="Age" hasFeedback>
        <InputNumber size="large" min={16} placeholder={36} max={100} defaultValue={3} onChange={onChange} />
      </Form.Item>

      {/* Email */}
      <Form.Item
        name="email"
        label="Email Address"
        rules={[
          { required: true, message: "This field is required!" },
          { type: "email", message: "Please enter a valid email address!" },
        ]}
      >
        <Input placeholder="johndoe@domain.com" id="email" name="email" />
      </Form.Item>

      {/* Confirm Email */}
      <Form.Item
        name="confirmEmail"
        label="Confirm Email Address"
        hasFeedback
        rules={[
          { required: true, message: "This field is required!" },
          { type: "email", message: "Please enter a valid email address!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("email") === value) {
                return Promise.resolve();
              }
              return Promise.reject("Email addresses must be same!");
            },
          }),
        ]}
      >
        <Input placeholder="johndoe@domain.com" id="confirmEmail" name="confirmEmail" />
      </Form.Item>

      {/* Country */}
      <Form.Item label="Country">
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Utopia"
          optionFilterProp="children"
          onFocus={() => {}}
          onChange={onCountrySelectChange}
          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          rules={[
            { required: true, message: "This field is required!" },
            { type: "number", message: "Phone number can only contain numbers 0-9" },
          ]}
        >
          {countryList}
        </Select>
      </Form.Item>

      {/* Contact Number */}
      <Form.Item
        name="contactNumber"
        label="Contact Number"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input
          placeholder="123 456 789"
          addonBefore={phonePrefixOptions}
          style={{ width: "100%" }}
          disabled={selectedCountry.phonePrefixes.length === 0}
        />
      </Form.Item>

      <Button onClick={onCheck}>Submit</Button>
    </Form>
  );
};
