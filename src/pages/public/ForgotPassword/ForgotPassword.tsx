import { Layout, Form, Input, Button, Row, Col, Typography, notification } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Navbar } from "../../../components/Navbar/Navbar";
import { useHistory } from "react-router-dom";

export const ForgotPassword = () => {
  const [form] = Form.useForm();
  const { Content, Footer } = Layout;
  const { Text, Link } = Typography;

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
      <br />
      <br />
      <Content>
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
            <Input autoFocus prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
              Submit
            </Button>
          </Form.Item>

          {isValid && (
            <Text type="warning">
              Account with provided email exists and in a non-development scenario you would get a token (sent
              on your mail) for reseting the password but for now you can{" "}
              <a onClick={() => history.push(`/resetPassword?token=${token(form.getFieldValue("email"))}`)}>
                click on this link
              </a>{" "}
              to reset your password.
            </Text>
          )}

          {isNotFound && <Text type="danger">User with that email was not found.</Text>}
        </Form>
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
