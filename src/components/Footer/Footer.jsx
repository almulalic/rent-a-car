import React from "react";
import { Layout, Row, Col } from "antd";
export const PersonalizedFooter = () => {
  const { Footer } = Layout;

  return (
    <div className="footerCustom">
      <Row>
        <Col span={24}>
          <Footer style={{ textAlign: "center", position: "fixed" }}>
            Rent A Car ©2021 Created by Ilhan Licina | Esmir Isic | Almir
            Mulalic
          </Footer>
        </Col>
      </Row>
    </div>
  );
};
