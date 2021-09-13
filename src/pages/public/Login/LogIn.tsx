import React from "react";
import { Button, Checkbox, Col, Form, Input, Layout, Row } from "antd";
import { Navbar } from "../../../components/Navbar/Navbar";
import { useHistory } from "react-router-dom";
import {UserOutlined, LockOutlined} from "antd-icon";

export const LogIn = () => {
  const { Content, Footer } = Layout;
  const history = useHistory();
 const [form] = Form.useForm();

  const onFinish = (values: any) => {
    if (values.username === "tester" && values.password === "12345678") {
      localStorage.setItem("permission", "1");
      history.push("/landing");
    } else {
      form.errors.push("NEvalja")
    }
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
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
           <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input autoFocus prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                min: 6,
                message:
                  "Password must be at least 8 chatachters long and consist of only lowercase, uppercase charachters.",
              },
            ]}
          >
             <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
          </Form.Item>

  <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
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
