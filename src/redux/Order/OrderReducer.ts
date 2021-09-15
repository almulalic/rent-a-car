import { createSlice } from "@reduxjs/toolkit";
import { IOrder, Order, IVehicle, Vehicle, IAdditionalOption } from "./models";

export interface IOrderFilters {
  transmission: string;
  fuel: string;
  doors: string;
  seats: string;
  reservationPeriod: [];
  [index: string]: string | [];
}

interface IOrderReducerInitialState {
  filters: IOrderFilters;
  currentOrder: IOrder | null;
  dropoffAddress: string;
  pickupAddress: string;
}

export const DEFAULT_ADDRESS = "71000 Sarajevo, Adresa 13";
export const initialState: IOrderReducerInitialState = {
  filters: {
    transmission: "",
    fuel: "",
    doors: "",
    seats: "",
    reservationPeriod: [],
  },
  currentOrder: new Order(),
  dropoffAddress: DEFAULT_ADDRESS,
  pickupAddress: DEFAULT_ADDRESS,
};

const orderReducerSlice = createSlice({
  name: "orderReducerSlice",
  initialState: initialState,
  reducers: {
    setFilter(state: any, action: any) {
      state.filters[action.payload.label] = action.payload.value;

      if (action.payload.label == "reservationPeriod") {
        state.currentOrder.loadFromStroage();
        state.currentOrder.totalDays = state.filters.reservationPeriod[1].diff(
          state.filters.reservationPeriod[0],
          "days"
        );
        state.currentOrder.serialize();
      }
    },

    setSelectedVehicle(state: any, action: any) {
      let vehicle: IVehicle = new Vehicle(
        action.payload.doors,
        action.payload.fuel,
        action.payload.img,
        action.payload.manufacturer,
        action.payload.name,
        action.payload.price,
        action.payload.seats,
        action.payload.transmission
      );

      state.currentOrder.loadFromStroage();
      state.currentOrder.setNewVehicle(vehicle);
    },

    setPickupAddress(state: any, action: any) {
      state.pickupAddress = action.payload;
    },

    setDropoffAddress(state: any, action: any) {
      state.dropoffAddress = action.payload;
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

    setPersonalInfo(state: any, action: any) {
      state.currentOrder.setPersonalInfo(action.payload);
    },

    resetOrder(state: any) {
      state.currentOrder = new Order();
      if (state.filters.reservationPeriod.length == 2) {
        state.currentOrder.totalDays = state.filters.reservationPeriod[1].diff(
          state.filters.reservationPeriod[0],
          "days"
        );
      }
      state.currentOrder.serialize();
    },
  },
});

export const {
  setFilter,
  setSelectedVehicle,
  setPickupAddress,
  setDropoffAddress,
  addAdditionalOption,
  removeAdditionalOption,
  setPersonalInfo,
  resetOrder,
} = orderReducerSlice.actions;

export default orderReducerSlice.reducer;
