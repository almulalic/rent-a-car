import { React } from "react";
import "./FilterWrap.css";
import { Row, Col, Select } from "antd";

const { Option } = Select;

export const FilterWrap = (props) => {
  function handleChange1(value) {
    if (value != undefined)
      props.setFilter({
        transMissin: value,
        fuel: props.filter.fuel,
        doors: props.filter.doors,
        seats: props.filter.seats,
      });
    else
      props.setFilter({
        transMissin: "",
        fuel: props.filter.fuel,
        doors: props.filter.doors,
        seats: props.filter.seats,
      });
  }
  function handleChange2(value) {
    if (value != undefined)
      props.setFilter({
        transMissin: props.filter.transMissin,
        fuel: value,
        doors: props.filter.doors,
        seats: props.filter.seats,
      });
    else
      props.setFilter({
        transMissin: props.filter.transMissin,
        fuel: "",
        doors: props.filter.doors,
        seats: props.filter.seats,
      });
  }
  function handleChange3(value) {
    if (value != undefined)
      props.setFilter({
        transMissin: props.filter.transMissin,
        fuel: props.filter.fuel,
        doors: value,
        seats: props.filter.seats,
      });
    else
      props.setFilter({
        transMissin: props.filter.transMissin,
        fuel: props.filter.fuel,
        doors: "",
        seats: props.filter.seats,
      });
  }
  function handleChange4(value) {
    if (value != undefined)
      props.setFilter({
        transMissin: props.filter.transMissin,
        fuel: props.filter.fuel,
        doors: props.filter.doors,
        seats: value,
      });
    else
      props.setFilter({
        transMissin: props.filter.transMissin,
        fuel: props.filter.fuel,
        doors: props.filter.doors,
        seats: "",
      });
  }

  return (
    <div className="filterWrap">
      <div className="childWrap">
        <h1>Filters:</h1>
        <Select
          className="selectTag selectTransVal"
          placeholder="Transmission type"
          style={{ width: 20 + "%" }}
          onChange={handleChange1}
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
          onChange={handleChange2}
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
          onChange={handleChange3}
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
          onChange={handleChange4}
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
