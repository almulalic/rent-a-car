import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu } from "antd";
import { UserOutlined, LoginOutlined, PhoneOutlined } from "@ant-design/icons";
import HeroText from "./HeroText";
import { Row, Col } from "antd";

const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <Layout className="layout">
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
    <Content>
      <div className="site-layout-content">
        <HeroText />
      </div>
    </Content>
  </Layout>,
  document.getElementById("root")
);
