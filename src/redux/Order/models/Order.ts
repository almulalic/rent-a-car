import { IVehicle, IAdditionalOption, ICustomer, Vehicle, Customer } from ".";
import { PersonalInfo } from "./PersonalInfo";

export interface IOrder {
  vehicle: IVehicle;
  totalPrice: number;
  additionalOptions: IAdditionalOption[];
  totalDays: number;
  customer: ICustomer;
}

export class Order implements IOrder {
  vehicle: IVehicle;
  totalPrice: number;
  additionalOptions: IAdditionalOption[];
  totalDays: number;
  customer: ICustomer;

  constructor() {
    this.vehicle = new Vehicle(4, "", "", "", "", 0, 4, "automatic");
    this.totalPrice = 0;
    this.additionalOptions = [];
    this.totalDays = 1;
    this.customer = new Customer();
  }

  loadFromStroage() {
    let storedOrder = localStorage.getItem("order");
    let parsedData = null;

    try {
      parsedData = JSON.parse(storedOrder ?? "") as IOrder;

      this.vehicle = parsedData.vehicle;
      this.totalPrice = parsedData.totalPrice;
      this.additionalOptions = parsedData.additionalOptions;
      this.totalDays = parsedData.totalDays;
      this.customer = parsedData.customer;
    } catch (e) {
      this.vehicle = new Vehicle(4, "", "", "", "", 0, 4, "automatic");
      this.totalPrice = 0;
      this.additionalOptions = [];
      this.totalDays = 1;
    }
  }

  setNewVehicle(vehicle: IVehicle) {
    localStorage.setItem("order", "");
    this.vehicle = vehicle;
    this.additionalOptions = [];
    this.totalPrice = vehicle.price * this.totalDays;
    this.serialize();
  }

  addAdditionalOption(newOption: IAdditionalOption) {
    this.additionalOptions.push(newOption);

    if (newOption.isDailyCharge) this.totalPrice += this.totalDays * newOption.price;
    else this.totalPrice += newOption.price;

    this.serialize();
  }

  removeAdditionalOption(option: IAdditionalOption) {
    this.additionalOptions = this.additionalOptions.filter((x) => x.value == option.value);

    if (option.isDailyCharge) this.totalPrice -= this.totalDays * option.price;
    else this.totalPrice -= option.price;

    this.serialize();
  }

  setPersonalInfo(personalInfo) {
    this.customer.perosnal = new PersonalInfo(
      personalInfo.fullName,
      personalInfo.age,
      personalInfo.email,
      personalInfo.country,
      personalInfo.contactNumber,
      personalInfo.countryCallPrefix,
      personalInfo.supervisor
    );

    this.serialize();
  }

  serialize() {
    localStorage.setItem("order", JSON.stringify(this));
  }
}
