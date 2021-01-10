import React from "react";
import "./FilterWrap.css";
import { Row, Col, Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}


export const FilterWrap = () => {
  return (
    <div className="filterWrap">
      <div className="childWrap">
        <h1>Filters: </h1>
        <Select
          className="selectTag selectTransVal"
          placeholder="Transmission type"
          style={{ width: 20 + "%" }}
          onChange={handleChange}
          id="select"
          allowClear
        >
          <Option value="manual">Manual transmission</Option>
          <Option value="automatic">Automatic transmission</Option>
        </Select>

        <Select
          className="selectTag selectFuelVal"
          placeholder="Fuel type"
          style={{ width: 20 + "%" }}
          onChange={handleChange}
          id="select"
          allowClear
        >
          <Option value="diesel">Diesel</Option>
          <Option value="petrol">Petrol</Option>
        </Select>

        <Select
          className="selectTag selectDoorsVal"
          placeholder="Doors"
          style={{ width: 20 + "%" }}
          onChange={handleChange}
          id="select"
          allowClear
        >
          <Option value="4">4 doors</Option>
          <Option value="2">2 doors</Option>
        </Select>

        <Select
          className="selectTag selectSeatsVal"
          placeholder="Number of seats"
          style={{ width: 20 + "%" }}
          onChange={handleChange}
          id="select"
          allowClear
        >
          <Option value="2">2</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
          <Option value="7">7</Option>
        </Select>
      </div>
    </div>
  );
};
