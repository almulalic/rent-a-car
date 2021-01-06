// import { Layout, Menu } from "antd";
import { Row, Col, BackTop, Layout, Menu, Footer } from "antd";
import {
  UserOutlined,
  LoginOutlined,
  PhoneOutlined,
  UpOutlined,
} from "@ant-design/icons";
import React from "react";
import HeroText from "./Components/HeroText";
import RentDiv from "./Components/RentDiv";
import OurCars from "./Components/OurCars";
import "./Landing.css";

export const Landing = () => {
  const { Header, Content, Footer } = Layout;

  return (
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
      <RentDiv />
      <BackTop>
        <div className="site-layout-outline">
          <UpOutlined />
        </div>
      </BackTop>
      <OurCars />
      <Row>
        <Col span={24}>
          <Footer style={{ textAlign: "center" }}>
            Rent A Car ©2021 Created by Ilhan Licina | Esmir Isic | Almir
            Mulalic
          </Footer>
        </Col>
      </Row>
    </Layout>
  );
};
