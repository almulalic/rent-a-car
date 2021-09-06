import React, { useState, useMemo, useEffect } from "react";
import { Form, Input, Select as select, InputNumber, Button } from "antd";

import countryInfo from "./countryInfo.json";
import { useSelector } from "react-redux";
import { IPersonalInfo } from "../../../../../redux/Order/models";

const formItemLayout = {
  wrapperCol: { span: 24 },
};

export const DriversPerosnalInfoForm = ({ setPersonalFormActive, onSuccessfulSubmitPersonalForm }) => {
  const Select = select as any;
  const { Option } = Select;
  const { currentOrder } = useSelector((state: any) => state.order);

  useEffect(() => {
    if (localStorage.getItem("personalInfo") != null) {
      let parsedInfo: IPersonalInfo = JSON.parse(localStorage.getItem("personalInfo"));

      if (parsedInfo.age != 0) {
        form.setFieldsValue({ driversFullName: parsedInfo.fullName });
        form.setFieldsValue({ driversAge: parsedInfo.age });
        form.setFieldsValue({ email: parsedInfo.emailAddress });
        form.setFieldsValue({ confirmEmail: parsedInfo.emailAddress });
        form.setFieldsValue({ country: parsedInfo.country });
        form.setFieldsValue({ contactNumber: parsedInfo.contactNumber });
        form.setFieldsValue({ countryCallPrefix: parsedInfo.countryCallPrefix });
        setSelectedCountry(countryInfo.filter((x) => x.code == parsedInfo.country)[0]);
        setPhoneInputDisabled(false);
        setDriversAge(parsedInfo.age);

        if (parsedInfo.age < 18) {
          supervisorsForm.setFieldsValue({ supervisorsFullName: parsedInfo.supervisor.fullName });
          supervisorsForm.setFieldsValue({ supervisorsAge: parsedInfo.supervisor.age });
        }
      }
    }
  }, [currentOrder]);

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

  const [supervisorsAge, setSupervisorsAge] = useState(20);
  const onSupervisorChange = (x: any) => {
    setSupervisorsAge(x);
  };

  const onSubmit = async () => {
    try {
      await form
        .validateFields([
          "driversFullName",
          "driversAge",
          "email",
          "confirmEmail",
          "country",
          "contactNumber",
        ])
        .then(async () => {
          if (driversAge < 18)
            await supervisorsForm.validateFields(["supervisorsFullName", "supervisorsAge"]);

          setPersonalFormActive(false);
          onSuccessfulSubmitPersonalForm({
            fullName: form.getFieldValue("driversFullName"),
            age: form.getFieldValue("driversAge"),
            email: form.getFieldValue("email"),
            country: form.getFieldValue("country"),
            contactNumber: form.getFieldValue("contactNumber"),
            countryCallPrefix: form.getFieldValue("countryCallPrefix"),
            supervisor:
              driversAge >= 18
                ? null
                : {
                    fullName: supervisorsForm.getFieldValue("supervisorsFullName"),
                    age: supervisorsForm.getFieldValue("supervisorsAge"),
                  },
          });
        })
        .catch(async (e) => {
          if (driversAge < 18)
            await supervisorsForm.validateFields(["supervisorsFullName", "supervisorsAge"]);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const onReset = () => {
    form.resetFields();
    supervisorsForm.resetFields();
  };

  const supervisorsMarkup = (
    <Form {...formItemLayout} style={{ marginLeft: "1em" }} form={supervisorsForm}>
      {/* Supervisors's Full Name */}
      <Form.Item
        label="Supervisor First Name"
        name="supervisorsFullName"
        rules={[{ required: true, message: "This field is required!" }]}
        hasFeedback
      >
        <Input placeholder="Jane" name="supervisorsFirstName" id="error" />
      </Form.Item>

      {/* Supervisor's  Age */}
      <Form.Item
        label="Supervisors Age"
        name="supervisorsAge"
        rules={[{ required: true, message: "This field is required!" }]}
        hasFeedback
      >
        <InputNumber
          name="supervisorsAge"
          size="middle"
          min={20}
          placeholder="20"
          max={100}
          onChange={onSupervisorChange}
        />
      </Form.Item>
    </Form>
  );

  return (
    <Form form={form} {...formItemLayout}>
      {/* Full Name */}
      <Form.Item
        name="driversFullName"
        label="Drivers Full Name"
        rules={[{ required: true, message: "This field is required!" }]}
        hasFeedback
      >
        <Input name="driversFullName" placeholder="John Doe" autoFocus />
      </Form.Item>

      {/* Age */}
      <Form.Item
        label="Drivers Age"
        name="driversAge"
        rules={[{ required: true, message: "This field is required!" }]}
        tooltip={tooltipAgeMessage}
      >
        <InputNumber
          name="driversAge"
          size="middle"
          min={16}
          placeholder="20"
          max={100}
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
      <Form.Item
        label="Country"
        name="country"
        rules={[{ required: true, message: "This field is required!" }]}
      >
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
        <Button danger type="dashed" onClick={onReset}>
          Reset
        </Button>
        <Button type="primary" onClick={onSubmit}>
          Next
        </Button>
      </div>
    </Form>
  );
};
