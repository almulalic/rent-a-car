import React, { useState } from "react";
import "./FormHome.css";
import { Row, Col, DatePicker, Space, Select, Button } from "antd";
import { DateTime } from "luxon";
import { useHistory } from "react-router-dom";

const { Option } = Select;
const { RangePicker } = DatePicker;
const FormHome = () => {
  const history = useHistory();

  function disabledDate(current) {
    return current && current < DateTime.local().startOf("day");
  }

  const [fuelType, setFuelType] = useState();
  const [transmissionType, setTransmissionType] = useState();
  const [dateRange, setDateRange] = useState([]);

  const onSearchClick = () => {
    history.push(
      `/order?transmissionType=${transmissionType}&fuelType=${fuelType}&bookingPeriod=${dateRange.map((x) => {
        return x.format("DD/MM/yyyy");
      })}`
    );
  };

  return (
    <div className="formHome">
      <Row id="head">
        <Col span={24}>
          <h1>
            Rent A <span>Car</span>
          </h1>
        </Col>
      </Row>
      <Row id="body2" justify="space-between">
        <Col span={7}>
          <Select
            value={transmissionType}
            onChange={setTransmissionType}
            showSearch
            style={{ width: 100 + "%" }}
            placeholder="Transmission"
            optionFilterProp="children"
          >
            <Option value="manual">Manual</Option>
            <Option value="automatic">Automatic</Option>
          </Select>
        </Col>

        <Col span={7}>
          <Select
            value={fuelType}
            showSearch
            style={{ width: 100 + "%" }}
            placeholder="Fuel type"
            optionFilterProp="children"
            onChange={setFuelType}
          >
            <Option value="diesel">Diesel</Option>
            <Option value="petrol">Petrol</Option>
          </Select>
        </Col>

        <Col span={7}>
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
            <RangePicker disabledDate={disabledDate} onChange={setDateRange} value={dateRange} clearIcon />
          </Space>
        </Col>
      </Row>
      <Row id="body3">
        <Col span={24}>
          <Button id="btn" type="primary" size="large" onClick={onSearchClick}>
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FormHome;
