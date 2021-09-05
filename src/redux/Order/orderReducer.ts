import { createSlice } from "@reduxjs/toolkit";
import { IAdditionalOption, IOrder, Order, Vehicle } from "../../shared/order";
import moment, { Moment } from "moment";

export interface IOrderFilters {
  transmission: string;
  fuel: string;
  doors: string;
  seats: string;
  reservationPeriod: [Moment, Moment];
  [index: string]: string | [Moment, Moment];
}

interface IOrderReducerInitialState {
  filters: IOrderFilters;
  currentOrder: IOrder | null;
}

export const initialState: IOrderReducerInitialState = {
  filters: {
    transmission: "",
    fuel: "",
    doors: "",
    seats: "",
    reservationPeriod: [moment(), moment().add(1, "day")],
  },
  currentOrder: null,
};

const orderReducerSlice = createSlice({
  name: "orderReducerSlice",
  initialState: initialState,
  reducers: {
    setFilters(state: any, action: any) {
      state.filters = action.payload;
    },

    setFilter(state: any, action: any) {
      state.filters[action.payload.label] = action.payload.value;
    },

    setSelectedVehicle(state: any, action: any) {
      let vehicle: Vehicle = new Vehicle(
        action.payload.doors,
        action.payload.fuel,
        action.payload.img,
        action.payload.manufacturer,
        action.payload.name,
        action.payload.price,
        action.payload.seats,
        action.payload.transmission
      );

      if (state.currentOrder != null) state.currentOrder.setNewVehicle(vehicle);
      else {
        state.currentOrder = new Order();
        state.currentOrder.loadFromStroage();

        if (state.currentOrder.vehicle.fuel == "") state.currentOrder.setNewVehicle(vehicle);
      }
    },

    addAdditionalOption(state: any, action: any) {
      if (
        state.currentOrder.additionalOptions.filter((x: IAdditionalOption) => x.value == action.payload.value)
          .length == 0
      )
        state.currentOrder.addAdditionalOption(action.payload);
    },

    removeAdditionalOption(state: any, action: any) {
      state.currentOrder.removeAdditionalOption(action.payload);
    },

    resetOrder(state: any) {
      state.currentOrder = new Order();
      state.currentOrder.serialize();
    },
  },
});

export const {
  setFilters,
  setFilter,
  setSelectedVehicle,
  addAdditionalOption,
  removeAdditionalOption,
  resetOrder,
} = orderReducerSlice.actions;

export default orderReducerSlice.reducer;
