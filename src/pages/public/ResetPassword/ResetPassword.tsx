import { Layout, Form, Input, notification, Button, Row, Col, Typography } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Navbar } from "../../../components/Navbar/Navbar";
import { useHistory } from "react-router-dom";

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
    console.log(values.password);
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
        message: "You have successfully reseted your password.",
      });
      history.push("/login");
    }, 1000);
  };

  const onFailedSubmit = () => {
    setValid(false);
  };

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
          <Input disabled addonBefore="TOKEN" defaultValue={token} />
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                min: 8,
                message:
                  "Password must be at least 8 chatachters long and consist of only lowercase and uppercase charachters with 0-9 numbers.",
              },
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
              {
                min: 6,
                message:
                  "Password must be at least 8 chatachters long and consist of only lowercase and uppercase charachters with 0-9 numbers.",
              },
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
