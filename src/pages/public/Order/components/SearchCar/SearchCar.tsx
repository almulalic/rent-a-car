import { useState } from "react";
import "./SearchCar.css";
import { FilterWrap } from "./components/FilterWrap";
import { ShowCar } from "./components/ShowCar";
import { IOrderFilters, setFilter } from "../../../../../redux/Order/OrderReducer";
import { useDispatch, useSelector } from "react-redux";

export const SearchCar = (props: any) => {
  const filters: IOrderFilters = useSelector((state: any) => state.order.filters);

  const dispatch = useDispatch();
  const [filterState, setFilterState] = useState(filters);

  const onFilterStateChange = (label: string, value: any) => {
    let state = Object.assign({}, filterState);
    state[label] = value ?? "";
    setFilterState(state);
    dispatch(setFilter({ label: label, value: value ?? "" }));
  };

  return (
    <div className="searchCar">
      <FilterWrap filter={filterState} setFilter={onFilterStateChange} />
      <ShowCar filter={filterState} setFilter={setFilterState} setCurrentStep={props.setCurrentStep} />
    </div>
  );
};
