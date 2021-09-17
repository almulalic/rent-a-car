import { Layout, Form, Input, Button, Row, Col, Typography, notification, Card } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Navbar } from "../../../components/Navbar/Navbar";
import { useHistory } from "react-router-dom";
import Title from "antd/lib/typography/Title";
import { PersonalizedFooter } from "../../../components/Footer/PersonalizedFooter";

export const ForgotPassword = () => {
  const [form] = Form.useForm();
  const { Content } = Layout;
  const { Text } = Typography;

  const [isLoading, setLoading] = useState(false);
  const [isValid, setValid] = useState(false);
  const [isNotFound, setNotFound] = useState(false);

  const onFinish = () => {
    let users = JSON.parse(localStorage.getItem("users"));

    let user = users.filter((x) => x.emailAddress === form.getFieldValue("email"))[0];

    const key = "updatable";

    if (user) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setNotFound(false);
        setValid(true);
        notification.open({
          key,
          top: 80,
          type: "info",
          style: {
            backgroundColor: "#131416",
            color: "#ffbf00",
          },
          message:
            "You have successfully requested password reset. Check your email to continue (and message below).",
        });
      }, 750);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setNotFound(true);
        setValid(false);
      }, 750);
    }
  };

  const onFailedSubmit = () => {
    setValid(false);
    setNotFound(false);
  };

  var token = function (email) {
    return btoa(email);
  };

  const history = useHistory();

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

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
                  Submit
                </Button>
              </Form.Item>

              {isValid && (
                <Text type="warning" className="forgotPasswordWarning">
                  Account with provided email exists and in a non-development scenario you would get a token
                  (sent on your mail) for reseting the password but for now you can{" "}
                  <a
                    onClick={() => history.push(`/resetPassword?token=${token(form.getFieldValue("email"))}`)}
                  >
                    click on this link
                  </a>
                  to reset your password.
                </Text>
              )}

              {isNotFound && <Text type="danger">User with that email was not found.</Text>}
            </Form>
          </Card>
        </div>
      </Content>
      <PersonalizedFooter />
    </Layout>
  );
};
