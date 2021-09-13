import "./FilterWrap.css";
import { Row, Col, Select, Form, DatePicker } from "antd";

import { DateTime } from "luxon";

export const FilterWrap = (props: any) => {
  const { RangePicker } = DatePicker;
  const { Option } = Select;

  function disabledDate(current: any) {
    // Can not select days before today and today
    return current && current < DateTime.local().startOf("day");
  }

  return (
    <div className="filterWrap">
      <div className="childWrap">
        <Row className="filtersMobile">
          <Col xs={24} md={24} lg={24}>
            <h1>Filters:</h1>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <Select
              value={
                props.filter.transmission !== ""
                  ? props.filter.transmission
                  : null
              }
              className="selectTag selectTransVal"
              placeholder="Transmission type"
              style={{ width: 20 + "%" }}
              onChange={(value) => props.setFilter("transmission", value)}
              id="select"
              allowClear
            >
              <Option value="manual">Manual transmission</Option>
              <Option value="automatic">Automatic transmission</Option>
            </Select>
          </Col>
          <Col xs={24} md={24} lg={24}>
            <Select
              value={props.filter.fuel !== "" ? props.filter.fuel : null}
              className="selectTag selectFuelVal"
              placeholder="Fuel type"
              style={{ width: 20 + "%" }}
              onChange={(value) => props.setFilter("fuel", value)}
              id="select"
              allowClear
            >
              <Option value="diesel">Diesel</Option>
              <Option value="petrol">Petrol</Option>
            </Select>
          </Col>

          <Col xs={24} md={24} lg={24}></Col>
          <Select
            value={props.filter.doors !== "" ? props.filter.doors : null}
            className="selectTag selectDoorsVal"
            placeholder="Doors"
            style={{ width: 20 + "%" }}
            onChange={(value) => props.setFilter("doors", value)}
            id="select"
            allowClear
          >
            <Option value="4">4 doors</Option>
            <Option value="2">2 doors</Option>
          </Select>
          <Col xs={24} md={24} lg={24}>
            <Select
              value={props.filter.seats !== "" ? props.filter.seats : null}
              className="selectTag selectSeatsVal"
              placeholder="Number of seats"
              style={{ width: 20 + "%" }}
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

          <Col xs={24} md={24} lg={24}>
            <RangePicker
              value={props.filter.reservationPeriod}
              name="reservationPeriod"
              disabledDate={disabledDate}
              className="rangePickerDate"
              onChange={(value) => props.setFilter("reservationPeriod", value)}
            />
          </Col>
        </Row>
        <Row className="filtersDesktop">
        <h1>Filters:</h1>
        <Select
          value={props.filter.transmission !== "" ? props.filter.transmission : null}
          className="selectTag selectTransVal"
          placeholder="Transmission type"
          style={{ width: 20 + "%" }}
          onChange={(value) => props.setFilter("transmission", value)}
          id="select"
          allowClear
        >
          <Option value="manual">Manual transmission</Option>
          <Option value="automatic">Automatic transmission</Option>
        </Select>

        <Select
          value={props.filter.fuel !== "" ? props.filter.fuel : null}
          className="selectTag selectFuelVal"
          placeholder="Fuel type"
          style={{ width: 20 + "%" }}
          onChange={(value) => props.setFilter("fuel", value)}
          id="select"
          allowClear
        >
          <Option value="diesel">Diesel</Option>
          <Option value="petrol">Petrol</Option>
        </Select>

        <Select
          value={props.filter.doors !== "" ? props.filter.doors : null}
          className="selectTag selectDoorsVal"
          placeholder="Doors"
          style={{ width: 20 + "%" }}
          onChange={(value) => props.setFilter("doors", value)}
          id="select"
          allowClear
        >
          <Option value="4">4 doors</Option>
          <Option value="2">2 doors</Option>
        </Select>

        <Select
          value={props.filter.seats !== "" ? props.filter.seats : null}
          className="selectTag selectSeatsVal"
          placeholder="Number of seats"
          style={{ width: 20 + "%" }}
          onChange={(value) => props.setFilter("seats", value)}
          id="select"
          allowClear
        >
          <Option value="2">2</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
          <Option value="7">7</Option>
        </Select>

        <RangePicker
          value={props.filter.reservationPeriod}
          name="reservationPeriod"
          disabledDate={disabledDate}
          className="rangePickerDate"
          onChange={(value) => props.setFilter("reservationPeriod", value)}
        />
        </Row>
      
       
      </div>
    </div>
  );
};
