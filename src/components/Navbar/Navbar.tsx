import { UserOutlined, LoginOutlined, PhoneOutlined } from "@ant-design/icons";
import { Row, Col, Menu, Layout } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const { Header } = Layout;

export const Navbar = () => {
  let history = useHistory();

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
              <span style={{ marginLeft: "7px" }}>My bookings</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={() => history.push("/login")}>
              <LoginOutlined />
              <span style={{ marginLeft: "7px" }}>SignIn</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={() => history.push("/singup")}>
              <LoginOutlined />
              <span style={{ marginLeft: "7px" }}>SignUp</span>
            </Menu.Item>
            <Menu.Item key="3">Language</Menu.Item>
            <Menu.Item key="4">
              <PhoneOutlined />
              <span style={{ marginLeft: "7px" }}>Call Us</span>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};
