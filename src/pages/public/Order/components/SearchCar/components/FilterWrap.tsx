import "./FilterWrap.css";
import { Row, Col, Select, Form, DatePicker } from "antd";

import { DateTime } from "luxon";
import { useState, useLayoutEffect } from "react";

export const FilterWrap = (props: any) => {
  const { RangePicker } = DatePicker;
  const { Option } = Select;

  function disabledDate(current: any) {
    // Can not select days before today and today
    return current && current < DateTime.local().startOf("day");
  }

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const [width, height] = useWindowSize();
  return (
    <div className="filterWrap">
      <Row justify="start" align="middle">
        <Col xs={24} sm={24} md={24} lg={2}>
          <h1 style={{ color: "white" }}>Filters:</h1>
        </Col>
        <Col xs={24} sm={24} md={12} lg={4} xl={4} style={{ marginBottom: width <= 990 ? "10px" : "0" }}>
          <Select
            value={props.filter.transmission !== "" ? props.filter.transmission : null}
            className="filterTag filterTagFirst selectTag selectTransVal"
            placeholder="Transmission type"
            onChange={(value) => props.setFilter("transmission", value)}
            id="select"
            allowClear
          >
            <Option value="manual">Manual</Option>
            <Option value="automatic">Automatic</Option>
          </Select>
        </Col>

        <Col xs={24} sm={24} md={12} lg={4} xl={4} style={{ marginBottom: width <= 990 ? "10px" : "0" }}>
          <Select
            value={props.filter.fuel !== "" ? props.filter.fuel : null}
            className="filterTag shortTag selectTag selectFuelVal"
            placeholder="Fuel type"
            onChange={(value) => props.setFilter("fuel", value)}
            id="select"
            allowClear
          >
            <Option value="diesel">Diesel</Option>
            <Option value="petrol">Petrol</Option>
          </Select>
        </Col>

        <Col xs={24} sm={24} md={12} lg={4} xl={4} style={{ marginBottom: width <= 990 ? "10px" : "0" }}>
          <Select
            value={props.filter.doors !== "" ? props.filter.doors : null}
            className="filterTag shortTag selectTag selectDoorsVal"
            placeholder="Doors"
            onChange={(value) => props.setFilter("doors", value)}
            id="select"
            allowClear
          >
            <Option value="4">4 doors</Option>
            <Option value="2">2 doors</Option>
          </Select>
        </Col>

        <Col xs={24} sm={24} md={12} lg={4} xl={4} style={{ marginBottom: width <= 990 ? "10px" : "0" }}>
          <Select
            value={props.filter.seats !== "" ? props.filter.seats : null}
            className="filterTag shortTag selectTag selectSeatsVal"
            placeholder="No of seats"
            onChange={(value) => props.setFilter("seats", value)}
            id="select"
            allowClear
          >
            <Option value="2">2</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
            <Option value="7">7</Option>
          </Select>
        </Col>

        <Col xs={24} sm={24} md={12} lg={6} xl={6} style={{ marginBottom: width <= 990 ? "10px" : "0" }}>
          <RangePicker
            value={props.filter.reservationPeriod}
            name="reservationPeriod"
            disabledDate={disabledDate}
            className="rangePickerDate filterTag"
            onChange={(value) => props.setFilter("reservationPeriod", value)}
          />
        </Col>
      </Row>
    </div>
  );
};
