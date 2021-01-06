import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import "antd/dist/antd.css";
import "./index.css";
import { Row, Col, BackTop, Layout, Menu } from "antd";
import { UserOutlined, LoginOutlined, PhoneOutlined, UpOutlined } from "@ant-design/icons";
import HeroText from "./HeroText";
import RentDiv from "./RentDiv";
import OurCars from "./OurCars";

const { Header, Content, Footer } = Layout;

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 0,
  backgroundColor: 'black',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};


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
    <RentDiv/>
    <OurCars/>
    <BackTop>
      <div style={style}><UpOutlined /></div>
    </BackTop>
  </Layout>,
=======

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
>>>>>>> b75f824be29fd62561becbacfbaddab9038ca3d6
  document.getElementById("root")
);
