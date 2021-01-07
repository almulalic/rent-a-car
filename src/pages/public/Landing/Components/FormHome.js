import React from "react";
import "./FormHome.css";
import { Row, Col, DatePicker, Space, Select, Button } from "antd";

const { Option } = Select;
const { RangePicker } = DatePicker;

class FormHome extends React.Component {
  render() {
    return (
      <div className="formHome">
        <Row id="head">
          <Col span={24}>
            <h1>
              Rent A <span>Car</span>
            </h1>
          </Col>
        </Row>
        <Row id="body2">
          <Col span={12}>
            <Select
              showSearch
              style={{ width: 100 + "%" }}
              placeholder="Car type"
              optionFilterProp="children"
            >
              <Option value="cars">Cars</Option>
              <Option value="trucks">Trucks</Option>
              <Option value="prestige">Prestige</Option>
            </Select>
          </Col>
          <Col span={12}>
            <Select showSearch style={{ width: 100 + "%" }} placeholder="City" optionFilterProp="children">
              <Option value="sarajevo">Sarajevo</Option>
              <Option value="tuzla">Tuzla</Option>
              <Option value="mostar">Mostar</Option>
              <Option value="banja-luka">Banja Luka</Option>
            </Select>
          </Col>
        </Row>
        <Row id="body">
          <Col span={24}>
            <Space direction="vertical" size={12}>
              <RangePicker />
            </Space>
          </Col>
        </Row>
        <Row id="body3">
          <Col span={24}>
            <Button id="btn" type="primary" size="large" href="/order">
              More
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FormHome;
