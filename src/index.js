import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu } from 'antd';
import { UserOutlined, LoginOutlined, PhoneOutlined } from '@ant-design/icons';


const { Header, Content, Footer } = Layout;

ReactDOM.render(
  <Layout className="layout">
    <Header>
      <div className="logo"><h1>Logo<span>Go</span></h1></div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><UserOutlined />My bookings</Menu.Item>
        <Menu.Item key="2"><LoginOutlined />SignIn/SignUp</Menu.Item>
        <Menu.Item key="3">Language</Menu.Item>
        <Menu.Item key="3"><PhoneOutlined />Call Us</Menu.Item>
      </Menu>
    </Header>
    <Content>
      <div className="site-layout-content">

      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>,
  document.getElementById('root'),
);