import React from "react";
import { Input } from "antd";
import { Checkbox } from "antd";
import { useState } from "react";
import { Row, Col } from "antd";
import ReactTooltip from "react-tooltip";

import { InfoCircleOutlined } from "@ant-design/icons";
import { additionalOptions, IAdditionalOption, IOrder } from "../../../../../shared/order";

import "./VehicleDetails.css";
import { addAdditionalOption, removeAdditionalOption } from "../../../../../redux/Order/orderReducer";
import { useDispatch, useSelector } from "react-redux";

export const AdditionalOptions = () => {
  const [isCustomPickup, setIsCustomPickup] = useState(false);
  const [pickupAddressInput, setPickupAddressInput] = useState("");
  const [isCustomDropoff, setIsCustomDropoff] = useState(false);
  const [dropoffAddressInput, setDropoffAddressInput] = useState("");

  const currentOrder: IOrder = useSelector((state: any) => state.order.currentOrder);
  const dispatch = useDispatch();

  function onChange(e: any, option: IAdditionalOption) {
    if (option.value == "customPickup") {
      setIsCustomPickup(e.target.checked);
    } else if (option.value == "customDropoff") {
      setIsCustomDropoff(e.target.checked);
    }

    if (e.target.checked) dispatch(addAdditionalOption(option));
    else dispatch(removeAdditionalOption(option));
  }

  return (
    <>
      <Checkbox.Group
        style={{ width: "100%" }}
        defaultValue={currentOrder.additionalOptions.map((x) => x.value)}
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
      {isCustomPickup && (
        <>
          <Input
            placeholder="Pickup adress (same city)"
            value={pickupAddressInput}
            onChange={(e) => setPickupAddressInput(e.target.value)}
          />
          <br />
          <br />
        </>
      )}
      {isCustomDropoff && (
        <>
          <Input
            placeholder="Dropoff adress (same city)"
            value={dropoffAddressInput}
            onChange={(e) => setDropoffAddressInput(e.target.value)}
          />

          <br />
          <br />
        </>
      )}
    </>
  );
};
