import { React, useState } from "react";
import "./SearchCar.css";
// import { Row, Col } from "antd";
import { FilterWrap } from "./components/FilterWrap";
import { ShowCar } from "./components/ShowCar";

export const SearchCar = (props) => {
  const [state, setState] = useState({
    transMissin: "",
    fuel: "",
    doors: "",
    seats: "",
  });

  return (
    <div className="searchCar">
      <FilterWrap filter={state} setFilter={setState} />
      <ShowCar filter={state} setFilter={setState} setCurrentStep={props.setCurrentStep} />
    </div>
  );
};
