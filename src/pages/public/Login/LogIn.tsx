import React, { useEffect, useState } from "react";
import { Button, Checkbox, notification, Col, Form, Input, Layout, Row, Typography, Card } from "antd";
import { Navbar } from "../../../components/Navbar/Navbar";
import { useHistory } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./Login.scss";
import Title from "antd/lib/typography/Title";

export const LogIn = () => {
  const { Content, Footer } = Layout;
  const { Text, Link } = Typography;

  const history = useHistory();
  const [form] = Form.useForm();
  const [areWrongCredentials, setWrongCredentials] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") != undefined) history.push("/landing");
  }, []);

  const onFinish = (values: any) => {
    let users = JSON.parse(localStorage.getItem("users"));

    let user = users.filter((x) => x.emailAddress == values.email)[0];

    if (user && (btoa(values.password) === user.password || values.password === user.password)) {
      setWrongCredentials(false);

      localStorage.setItem("token", "true");
      localStorage.setItem("personalInfo", JSON.stringify(user));
      const key = "updatable";
      setLoading(true);
      setTimeout(() => {
        setLoading(false);

        if (form.getFieldValue("remember")) {
          localStorage.setItem(
            "loginFormRemember",
            JSON.stringify({
              email: user.emailAddress,
              password: user.password,
            })
          );
        } else localStorage.removeItem("loginFormRemember");

        notification.open({
          key,
          top: 80,
          message: "You have successfully logged in.",
        });
        history.push("/landing");
      }, 1000);
    } else {
      setWrongCredentials(false);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setWrongCredentials(true);
      }, 750);
    }
  };

  const onFailedSubmit = () => {
    setWrongCredentials(false);
  };

  useEffect(() => {
    let login = localStorage.getItem("loginFormRemember");

    if (login != undefined) {
      let parse = JSON.parse(login);

      form.setFieldsValue({ email: parse.email, password: parse.password });
    }
  }, []);

  return (
    <Layout className="layout">
      <Navbar />
      <br />
      <br />
      <Content>
        <div className="site-layout-content form-content">
          <Card bordered className="resetPasswordForm" style={{ background: "#f4f3f0", opacity: "0.9" }}>
            <Title level={3}>Log In</Title>
            <br />
            <Form
              name="normal_login"
              form={form}
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
              onFinishFailed={onFailedSubmit}
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please input a valid email address!" },
                ]}
              >
                <Input
                  autoFocus
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  {
                    min: 8,
                    message:
                      "Password must be at least 8 chatachters long and consist of at least one letter, one number and one special charachter.",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item className="formItemCheckbox">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="" onClick={() => history.push("/forgotPassword")}>
                  Forgot password?
                </a>
              </Form.Item>
              {areWrongCredentials && <Text type="danger">The email or password is incorrect.</Text>}
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
                  Log in
                </Button>
                Or <a onClick={() => history.push("/signup")}>register now!</a>
              </Form.Item>
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
