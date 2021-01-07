// import { Layout, Menu } from "antd";
import { Row, Col, BackTop, Layout, Menu, Footer } from "antd";
import { UserOutlined, LoginOutlined, PhoneOutlined, UpOutlined } from "@ant-design/icons";
import React from "react";
import HeroText from "./Components/HeroText";
import RentDiv from "./Components/RentDiv";
import OurCars from "./Components/OurCars";
import "./Landing.css";
import { Navbar } from "../../../components/Navbar/Navbar";

export const Landing = () => {
  const { Content, Footer } = Layout;

  return (
    <Layout className="layout">
      <Navbar />
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
            Rent A Car ©2021 Created by Ilhan Licina | Esmir Isic | Almir Mulalic
          </Footer>
        </Col>
      </Row>
    </Layout>
  );
};
