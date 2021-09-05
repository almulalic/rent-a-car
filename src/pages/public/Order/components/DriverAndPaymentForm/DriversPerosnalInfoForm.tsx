import React, { useState, useEffect, useMemo } from "react";
import { Form, Input, DatePicker, TimePicker, Select as select, Cascader, InputNumber, Button } from "antd";
import { DateTime } from "luxon";

import countryInfo from "./countryInfo.json";

const formItemLayout = {
  wrapperCol: { span: 24 },
};

export const DriversPerosnalInfoForm = () => {
  const Select = select as any;
  const { Option } = Select;

  const tooltipAgeMessage =
    "Drivers under the age of 18 must have a valid drivers license and be with someone (Supervisor) that has a valid drivers license and at least 2 years of driving experience at all times.";
  const [form] = Form.useForm();
  const [supervisorsForm] = Form.useForm();

  //#region Country & PhonePrefix

  const [selectedCountry, setSelectedCountry] = useState({ name: null, code: null, phonePrefixes: [] });

  const onCountrySelectChange = (value: any) => {
    form.resetFields(["countryCallPrefix"]);
    setPhoneInputDisabled(true);
    setSelectedCountry(countryInfo.filter((x) => x.code == value)[0] as any);
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
      <Form.Item name="countryCallPrefix" noStyle>
        <Select
          style={{ width: 90 }}
          size="middle"
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
  const onChange = (x: any) => {
    setDriversAge(x);
  };

  const onCheck = async () => {
    form.validateFields(["email"]);
    form.validateFields(["confirmEmail"]);
  };

  const supervisorsMarkup = (
    <Form {...formItemLayout} style={{ marginLeft: "1em" }} form={supervisorsForm}>
      {/* Supervisors's First Name */}
      <Form.Item
        label="Supervisor's First Name"
        name="supervisorsFirstName"
        rules={[{ required: true, message: "This field is required!" }]}
        hasFeedback
      >
        <Input placeholder="Jane" name="supervisorsFirstName" id="error" />
      </Form.Item>

      {/* Supervisor's Last Name */}
      <Form.Item
        label="Supervisors's Last Name"
        name="supervisorsLastName"
        rules={[{ required: true, message: "This field is required!" }]}
        hasFeedback
      >
        <Input placeholder="Doe" name="supervisorsLastName" id="error" />
      </Form.Item>

      {/* Supervisor's  Age */}
      <Form.Item
        label="Supervisor's Age"
        name="supervisorsAge"
        rules={[{ required: true, message: "This field is required!" }]}
        hasFeedback
      >
        <InputNumber
          name="supervisorsAge"
          size="middle"
          min={18}
          placeholder="36"
          max={100}
          defaultValue={20}
          onChange={onChange}
        />
      </Form.Item>
    </Form>
  );

  return (
    <Form form={form} {...formItemLayout}>
      {/* Full Name */}
      <Form.Item
        name="driversFirstName"
        label="Driver's First Name"
        rules={[{ required: true, message: "This field is required!" }]}
        hasFeedback
      >
        <Input name="driversFirstName" placeholder="John" autoFocus />
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
          placeholder="36"
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
          size="middle"
          style={{ width: 300 }}
          placeholder="Utopia"
          optionFilterProp="children"
          onFocus={() => {}}
          onChange={onCountrySelectChange}
          filterOption={(input: any, option: any) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
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

      <div className="twoButtonRow">
        <Button danger type="dashed" onClick={onCheck}>
          Reset
        </Button>
        <Button type="primary" onClick={onCheck}>
          Finalize
        </Button>
      </div>
    </Form>
  );
};
