import { Layout, Form, Input, notification, Button, Row, Col, Typography, Card } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Navbar } from "../../../components/Navbar/Navbar";
import { useHistory } from "react-router-dom";
import Title from "antd/lib/typography/Title";
import "../Login/Login.scss";
import { PersonalizedFooter } from "../../../components/Footer/PersonalizedFooter";

export const ResetPassword = (props) => {
  const [form] = Form.useForm();
  const { Content, Footer } = Layout;
  const { Text, Link } = Typography;

  const [token, setToken] = useState(props.location.search.split("=")[1]);
  const [isLoading, setLoading] = useState(false);
  const [isValid, setValid] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (!token) history.push("/login");
  }, []);

  const onFinish = (values: any) => {
    let users = JSON.parse(localStorage.getItem("users"));

    let user = users.filter((x) => x.emailAddress == atob(token))[0];

    user.password = btoa(values.password);

    localStorage.setItem("users", JSON.stringify(users));

    let remember = JSON.parse(localStorage.getItem("loginFormRemember"));

    if (remember) {
      localStorage.setItem(
        "loginFormRemember",
        JSON.stringify({ email: remember.email, password: user.password })
      );
    }

    const key = "updatable";

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      notification.open({
        key,
        top: 80,
        message: "You have successfully reseted your password.",
      });
      history.push("/login");
    }, 1000);
  };

  const onFailedSubmit = () => {
    setValid(false);
  };

  const passwordValidationRegex = new RegExp(`^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$`);
  function ascii(a) {
    return a.charCodeAt(0);
  }

  return (
    <Layout className="layout">
      <Navbar />
      <br />
      <br />
      <Content>
        <div className="site-layout-content form-content">
          <Card bordered className="resetPasswordForm" style={{ background: "#f4f3f0", opacity: "0.9" }}>
            <Title level={3}>Reset Password</Title>
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
              <Form.Item>
                <Input disabled addonBefore="TOKEN" defaultValue={token} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },

                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (
                        value.length >= 8 &&
                        value
                          .split("")
                          .map((x) => ascii(x))
                          .filter((x: number) => (x >= 65 && x <= 90) || (x >= 97 && x <= 122)).length != 0 &&
                        value
                          .split("")
                          .map((x) => ascii(x))
                          .filter((x: number) => x >= 48 && x <= 57).length != 0 &&
                        value
                          .split("")
                          .map((x) => ascii(x))
                          .filter(
                            (x: number) =>
                              (x >= 33 && x <= 47) || (x >= 91 && x <= 96) || (x >= 123 && x <= 126)
                          ).length != 0
                      ) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "Password must be at least 8 chatachters long and consist of at least one letter, one number and one special charachter."
                      );
                    },
                  }),
                ]}
              >
                <Input
                  autoFocus
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item
                name="repeat-password"
                rules={[
                  { required: true, message: "Please repeat your password!" },

                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject("Password must be same!");
                    },
                  }),
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
                  Reset
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Content>
      <PersonalizedFooter />
    </Layout>
  );
};
