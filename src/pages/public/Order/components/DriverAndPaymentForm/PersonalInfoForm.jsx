import React, { useState, useEffect, useMemo } from "react";
import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber, Button } from "antd";
import { DateTime } from "luxon";

import countryInfo from "./countryInfo.json";

const formItemLayout = {
  wrapperCol: { span: 24 },
};

const buttonItemLayout = {
  wrapperCol: { span: 14, offset: 4 },
};

export const DriversPerosnalInfoForm = () => {
  const { Option } = Select;
  const { RangePicker } = DatePicker;

  const tooltipAgeMessage =
    "Drivers under the age of 18 must have a valid drivers license and be with someone (Supervisor) that has a valid drivers license and at least 2 years of driving experience at all times.";
  const [form] = Form.useForm();
  const [supervisorsForm] = Form.useForm();

  //#region Country & PhonePrefix

  const [selectedCountry, setSelectedCountry] = useState({ name: null, code: null, phonePrefixes: [] });

  const onCountrySelectChange = (value) => {
    form.resetFields(["countryCallPrefix"]);
    setPhoneInputDisabled(true);
    setSelectedCountry(countryInfo.filter((x) => x.code == value)[0]);
  };

  const [isPhoneInputDisabled, setPhoneInputDisabled] = useState(
    form.getFieldValue("countryCallPrefix") === undefined
  );

  const countryList = useMemo(() => {
    return countryInfo.map((x) => {
      return <Option value={x.code}>{x.name}</Option>;
    });
  }, []);

  const phonePrefixOptions = useMemo(() => {
    return (
      <Form.Item name="countryCallPrefix" noStyle s>
        <Select
          style={{ width: 90 }}
          size="middle"
          name="countryCallPrefix"
          placeholder="+00"
          onChange={() => {
            setPhoneInputDisabled(false);
          }}
          disabled={selectedCountry.phonePrefixes.length === 0}
        >
          {selectedCountry.phonePrefixes.map((x) => {
            return <Option value={x}>+{x}</Option>;
          })}
        </Select>
      </Form.Item>
    );
  }, [selectedCountry]);

  //#endregion

  const [driversAge, setDriversAge] = useState(18);
  const onChange = (x) => {
    setDriversAge(x);
  };

  const onCheck = async () => {
    form.validateFields(["email"]);
    form.validateFields(["confirmEmail"]);
  };

  const supervisorsMarkup = (
    <Form {...formItemLayout} style={{ marginLeft: "1em" }} form={supervisorsForm}>
      {/* Supervisors's First Name */}
      <Form.Item label="Supervisor's First Name" name="supervisorsFirstName" hasFeedback>
        <Input placeholder="Jane" id="error" />
      </Form.Item>

      {/* Supervisor's Last Name */}
      <Form.Item label="Supervisors's Last Name" name="supervisorsLastName" hasFeedback>
        <Input placeholder="Doe" id="error" />
      </Form.Item>

      {/* Supervisor's  Age */}
      <Form.Item label="Supervisor's Age" hasFeedback>
        <InputNumber
          name="supervisorsAge"
          size="large"
          min={18}
          placeholder={36}
          max={100}
          defaultValue={20}
          onChange={onChange}
        />
      </Form.Item>
    </Form>
  );

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < DateTime.local().endOf("day");
  }

  return (
    <Form form={form} style={{ width: "75%" }} {...formItemLayout}>
      {/* First Name */}
      <Form.Item
        name="driversFirstName"
        label="Driver's First Name"
        rules={[{ required: true, message: "This field is required!" }]}
        hasFeedback
      >
        <Input name="driversFirstName" placeholder="John" hasFeedback autoFocus />
      </Form.Item>

      {/* Last Name */}
      <Form.Item
        name="driversLastName"
        label="Drivers's Last Name"
        rules={[{ required: true, message: "This field is required!" }]}
        hasFeedback
      >
        <Input name="driversLastName" placeholder="Doe" hasFeedback />
      </Form.Item>

      {/* Age */}
      <Form.Item
        label="Driver's Age"
        name="driversAge"
        rules={[{ required: true, message: "This field is required!" }]}
        tooltip={tooltipAgeMessage}
      >
        <InputNumber
          name="driversAge"
          size="middle"
          min={16}
          placeholder={36}
          max={100}
          defaultValue={18}
          onChange={onChange}
        />
      </Form.Item>

      {/* Supervisor's Form */}
      {driversAge < 18 && supervisorsMarkup}

      {/* Email */}
      <Form.Item
        label="Email Address"
        name="email"
        hasFeedback
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
      <Form.Item label="Country" name="country">
        <Select
          showSearch
          name="country"
          size="middle"
          style={{ width: 300 }}
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
        tooltip={selectedCountry.phonePrefixes.length === 0 ? "Select your country first" : ""}
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input
          placeholder="123 456 789"
          size="middle"
          addonBefore={phonePrefixOptions}
          disabled={isPhoneInputDisabled}
        />
      </Form.Item>

      {/* Booking Period */}
      <Form.Item
        label="Booking Period"
        name="bookingPeriod"
        rules={[{ required: true, message: "This field is required!" }]}
        {...buttonItemLayout}
      >
        <RangePicker name="bookingPeriod" disabledDate={disabledDate} />
      </Form.Item>

      <Form.Item {...buttonItemLayout}>
        <Button onClick={onCheck}>Submit</Button>
      </Form.Item>
    </Form>
  );
};
