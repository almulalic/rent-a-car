import React from "react";
import ReactDOM from "react-dom";
import "./FormHome.css";
import { Row, Col, Button } from "antd";

class FormHome extends React.Component {
    render() {
      return (
        <div className="formHome">
          <Row id="head">
              <Col span={24}>
                  <h1>Rent A <span>Car</span></h1>
              </Col>
          </Row>
          <Row id="body">

          </Row>
        </div>
      );
    }
  }
  
  export default FormHome;
  