import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Layout,
  notification,
  Row,
  Select as select,
} from "antd";
import form from "antd/lib/form";
import { Content, Footer } from "antd/lib/layout/layout";
import React, { useEffect, useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import countryInfo from "../../../JSON/countryInfo.json";
import { Navbar } from "../../../components/Navbar/Navbar";
import { User } from "../../../redux/User/model/User";
import { LockOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";

const formItemLayout = {
  wrapperCol: { span: 24 },
};

export const SignUp = () => {
  const Select = select as any;
  const { Option } = Select;

  const history = useHistory();
  const [form] = Form.useForm();
  const [supervisorsForm] = Form.useForm();

  const tooltipAgeMessage =
    "Drivers under the age of 18 must have a valid drivers license and be with someone (Supervisor) that has a valid drivers license and at least 2 years of driving experience at all times.";
  const [supervisorsAge, setSupervisorsAge] = useState(20);
  const [driversAge, setDriversAge] = useState(18);
  const onSupervisorChange = (x: any) => {
    setSupervisorsAge(x);
  };
  const onChange = (x: any) => {
    setDriversAge(x);
  };

  useEffect(() => {
    if (localStorage.getItem("token") != undefined) history.push("/landing");
  }, []);

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

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));

  const [isValid, setValid] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);

    setTimeout(() => {
      users.push(
        new User(
          users.length + 1,
          values.fullName,
          values.age,
          values.emailAddress,
          values.country,
          values.contactNumber,
          values.countryCallPrefix,
          null,
          values.password
        )
      );

      localStorage.setItem("users", JSON.stringify(users));
      const key = "updatable";
      notification.open({
        key,
        top: 80,
        message:
          "You have successfully registered. Check your mail for activation link (disabled for now you can just log in)",
      });
      setLoading(false);
      history.push("/login");
    }, 750);
  };

  const onFinishFailed = () => {};

  return (
    <Layout className="layout">
      <Navbar />
      <br />
      <br />
      <Content>
        <div className="site-layout-content form-content">
          <Card bordered className="resetPasswordForm" style={{ background: "#f4f3f0", opacity: "0.9" }}>
            <Title level={3}>Sign Up</Title>
            <br />
            <Form
              form={form}
              {...formItemLayout}
              labelAlign="left"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
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
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (
                        !value ||
                        users.filter((x) => x.emailAddress == getFieldValue("email")).length == 0
                      ) {
                        return Promise.resolve();
                      }
                      return Promise.reject("Email alraedy exists!");
                    },
                  }),
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
                  ({ getFieldValue, getFieldError }) => ({
                    validator(_, value) {
                      if (value && getFieldValue("email") === value && getFieldError("email").length == 0) {
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

              {/* Password */}
              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true, message: "Please input your phone number!" }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <div className="twoButtonRow login-form-button">
                <Button type="primary" htmlType="submit" loading={isLoading}>
                  Submit
                </Button>
              </div>
            </Form>
          </Card>
        </div>
      </Content>
      <Row>
        <Col span={24}>
          <Footer className="footerCustom" style={{ textAlign: "center" }}>
            Rent A Car ©2021 Created by Ilhan Licina | Esmir Isic | Almir Mulalic
          </Footer>
        </Col>
      </Row>
    </Layout>
  );
};
