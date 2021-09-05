import "./FilterWrap.css";
import { Row, Col, Select, Form, DatePicker } from "antd";

import { DateTime } from "luxon";
import moment from "moment";

export const FilterWrap = (props: any) => {
  const { RangePicker } = DatePicker;
  const { Option } = Select;

  function disabledDate(current: any) {
    // Can not select days before today and today
    return current && current < DateTime.local().endOf("day");
  }

  return (
    <div className="filterWrap">
      <div className="childWrap">
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
          name="bookingPeriod"
          disabledDate={disabledDate}
          onChange={(value) => props.setFilter("date", value)}
        />
      </div>
    </div>
  );
};
