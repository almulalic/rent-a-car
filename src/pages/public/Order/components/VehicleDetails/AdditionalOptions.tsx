import React, { useEffect } from "react";
import { Checkbox } from "antd";
import { useState } from "react";
import { Row, Col, Form, Input } from "antd";
import ReactTooltip from "react-tooltip";

import { InfoCircleOutlined } from "@ant-design/icons";

import "./VehicleDetails.css";
import {
  addAdditionalOption,
  DEFAULT_ADDRESS,
  removeAdditionalOption,
  setDropoffAddress,
  setPickupAddress,
} from "../../../../../redux/Order/OrderReducer";
import { useDispatch, useSelector } from "react-redux";
import { additionalOptions, IAdditionalOption } from "../../../../../redux/Order/models";

export const AdditionalOptions = ({ form }: any) => {
  let { currentOrder, pickupAddress, dropoffAddress } = useSelector((state: any) => state.order);
  const dispatch = useDispatch();

  const onPickupAddressChange = (e: any) => {
    dispatch(setPickupAddress(e.target.value));
  };

  const onDropoffAddressChange = (e: any) => {
    dispatch(setDropoffAddress(e.target.value));
  };

  const [isCustomPickup, setIsCustomPickup] = useState(
    currentOrder.additionalOptions.filter((x: IAdditionalOption) => x.value == "customPickup").length != 0
  );
  const [isCustomDropoff, setIsCustomDropoff] = useState(
    currentOrder.additionalOptions.filter((x: IAdditionalOption) => x.value == "customDropoff").length != 0
  );

  function onChange(e: any, option: IAdditionalOption) {
    if (option.value == "customPickup") setIsCustomPickup(e.target.checked);
    else if (option.value == "customDropoff") setIsCustomDropoff(e.target.checked);

    if (e.target.checked) dispatch(addAdditionalOption(option));
    else dispatch(removeAdditionalOption(option));
  }

  return (
    <>
      <Checkbox.Group
        style={{ width: "100%" }}
        defaultValue={currentOrder.additionalOptions.map((x: IAdditionalOption) => x.value)}
      >
        <Row>
          {additionalOptions.map((x: IAdditionalOption) => {
            return (
              <Col span={8}>
                <Checkbox value={x.value} onChange={(e) => onChange(e, x)}>
                  {`${x.label} (+${x.price}$${x.value == "pet" || x.value == "driver" ? "/day" : ""})`}
                  <InfoCircleOutlined
                    style={{ marginLeft: "5px", fontSize: "12px" }}
                    data-tip={x.description}
                  />
                </Checkbox>
                <ReactTooltip place="top" border effect="solid" borderColor="#121212" />
              </Col>
            );
          })}
        </Row>
      </Checkbox.Group>
      <br />
      <br />
      <Form form={form} layout="vertical" autoComplete="off">
        {isCustomPickup && (
          <Form.Item name="pickupAddress" rules={[{ required: true, message: "This field is required!" }]}>
            <Input
              placeholder="Pickup adress (same city)"
              value={pickupAddress === DEFAULT_ADDRESS ? "" : pickupAddress}
              onChange={onPickupAddressChange}
              allowClear
            />
          </Form.Item>
        )}
        {isCustomDropoff && (
          <Form.Item name="dropoffAddress" rules={[{ required: true, message: "This field is required!" }]}>
            <Input
              placeholder="Dropoff adress (same city)"
              value={dropoffAddress === DEFAULT_ADDRESS ? "" : dropoffAddress}
              onChange={onDropoffAddressChange}
              allowClear
            />
          </Form.Item>
        )}
      </Form>
    </>
  );
};
