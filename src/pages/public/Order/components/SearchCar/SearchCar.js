import { React, useState } from "react";
import "./SearchCar.css";
// import { Row, Col, Button } from "antd";
import { FilterWrap } from "./components/FilterWrap";
import { ShowCar } from "./components/ShowCar";

export const SearchCar = () => {
  const [state, setState] = useState({
    transMissin: "",
    fuel: "",
    doors: "",
    seats: "",
  });

  return (
    <div className="searchCar">
      <FilterWrap filter={state} setFilter={setState} />
      <ShowCar filter={state} setFilter={setState} />
    </div>
  );
};
