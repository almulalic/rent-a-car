import { UserOutlined, LoginOutlined, PhoneOutlined } from "@ant-design/icons";
import { Row, Col, Menu, Layout } from "antd";
import React from "react";

const { Header  } = Layout;

export const Navbar = () => {
 
  return (
    <Header>
    <Row gutter={[16, 24]}>
      <Col span={12}>
        <div className="logo">
          <a href="/">
            <h1>
              Logo<span>Go</span>
            </h1>
          </a>
        </div>
      </Col>
      <Col span={12}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            <UserOutlined />
            My bookings
          </Menu.Item>
          <Menu.Item key="2">
            <LoginOutlined />
            SignIn/SignUp
          </Menu.Item>
          <Menu.Item key="3">Language</Menu.Item>
          <Menu.Item key="4">
            <PhoneOutlined />
            Call Us
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </Header>
  );
};
