import { useEffect, useState } from "react";
import "./SearchCar.css";
import { FilterWrap } from "./components/FilterWrap";
import { ShowCar } from "./components/ShowCar";
import { IOrderFilters, setFilter } from "../../../../../redux/Order/OrderReducer";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

export const SearchCar = (props) => {
  const filters: IOrderFilters = useSelector((state: any) => state.order.filters);

  const dispatch = useDispatch();
  const [filterState, setFilterState] = useState(filters);

  const onFilterStateChange = (label: string, value: any) => {
    let state = Object.assign({}, filterState);
    state[label] = value ?? "";
    setFilterState(state);
    dispatch(setFilter({ label: label, value: value ?? "" }));
  };

  useEffect(() => {
    let params = document.location.search.replace("?", "").split("&");
    let state = Object.assign({}, filterState);
    if (params.length > 0 && params[0].split("=")[1] != undefined) {
      let value = params[0].split("=")[1];
      state["transmission"] = value;
    }

    if (params.length > 1 && params[1].split("=")[1] != undefined) {
      let value = params[1].split("=")[1];
      state["fuel"] = value;
    }

    if (params.length > 2 && params[1].split("=")[1] != undefined) {
      let dates = params[2].split("=")[1].split(",");
      state["reservationPeriod"] = [moment(dates[0], "DD/MM/yyyy"), moment(dates[1], "DD/MM/yyyy")];
    }

    setFilterState(state);
  }, []);

  return (
    <div className="searchCar">
      <FilterWrap filter={filterState} setFilter={onFilterStateChange} />
      <ShowCar filter={filterState} setFilter={setFilterState} setCurrentStep={props.setCurrentStep} />
    </div>
  );
};
