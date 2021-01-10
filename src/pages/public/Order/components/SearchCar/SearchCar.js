import React from "react";
import "./SearchCar.css";
import { Row, Col, Button } from "antd";
import { FilterWrap } from "./components/FilterWrap";
import { ShowCar } from "./components/ShowCar";

export const SearchCar = () => {
    return (
      <div className="searchCar">
        <FilterWrap />
        <ShowCar />
      </div>
    );
};

