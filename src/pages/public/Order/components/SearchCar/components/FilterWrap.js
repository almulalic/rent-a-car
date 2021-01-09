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
          placeholder="Transmission type"
          style={{ width: 20 + "%" }}
          onChange={handleChange}
          id="select"
        >
          <Option value="manual">Manual transmission</Option>
          <Option value="automatic">Automatic transmission</Option>
        </Select>

        <Select
          placeholder="Fuel type"
          style={{ width: 20 + "%" }}
          onChange={handleChange}
          id="select"
        >
          <Option value="diesel">Diesel</Option>
          <Option value="petrol">Petrol</Option>
        </Select>

        <Select
          placeholder="Doors"
          style={{ width: 20 + "%" }}
          onChange={handleChange}
          id="select"
        >
          <Option value="4doors">4 doors</Option>
          <Option value="2doors">2 doors</Option>
        </Select>

        <Select
           placeholder="Number of seats"
          style={{ width: 20 + "%" }}
          onChange={handleChange}
          id="select"
        >
          <Option value="two">2</Option>
          <Option value="four">4</Option>
          <Option value="five">5</Option>
          <Option value="seven">7</Option>
        </Select>
      </div>
    </div>
  );
};
