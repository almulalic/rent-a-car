export interface IAdditionalOption {
  label: string;
  value: string;
  description: string;
  price: number;
  isDailyCharge: boolean;
}

export const additionalOptions: IAdditionalOption[] = [
  {
    label: "Freshly cleaned",
    value: "cleaned",
    description:
      "Every car gets cleaned after customers.If you have any special wishes or you want your car extra clean you can select this option",
    price: 20,
    isDailyCharge: false,
  },
  {
    label: "Pet friendly",
    value: "pet",
    description:
      "You can bring one pet with you and we will provide cage and other items for your pet. Damage made by pet is excluded from the fee.",
    price: 10,
    isDailyCharge: true,
  },
  {
    label: "Personal driver",
    value: "driver",
    description: "You can have one of our private drivers to drive you where you desire.",
    price: 100,
    isDailyCharge: true,
  },
  {
    label: "No limit on return time",
    value: "unlimitedReturn",
    description:
      "Every car must be return last day untill 12 PM. If you plan to stay a little longer you can pay this fee and return it untill 6PM.",
    price: 50,
    isDailyCharge: false,
  },
  {
    label: "Full tourist pack",
    value: "tourist",
    description:
      "You get acess to the offline GPS module and a torusit starter pack for the city you rent the vehicle. Discount coupons are included.",
    price: 25,
    isDailyCharge: false,
  },
  {
    label: "Custom pickup",
    value: "customPickup",
    description:
      "If you want us to leave the vehicle at the airport or any other location in the city you can specify the adress here.",
    price: 30,
    isDailyCharge: false,
  },
  {
    label: "Custom dropoff",
    value: "customDropoff",
    description:
      "If you want us to pick the vehicle up at the airport or any other location in the ciy you can specify the adress here.",
    price: 50,
    isDailyCharge: false,
  },
];

export type TransmissionType = "manual" | "automatic";

export interface IVehicle {
  doors: number;
  fuel: string;
  img: string;
  manufacturer: string;
  name: string;
  price: number;
  seats: number;
  transmission: TransmissionType;
  [index: string]: string | number | TransmissionType;
}

export class Vehicle implements IVehicle {
  doors: number;
  fuel: string;
  img: string;
  manufacturer: string;
  name: string;
  price: number;
  seats: number;
  transmission: TransmissionType;
  [index: string]: string | number | TransmissionType;

  constructor(
    doors: number,
    fuel: string,
    img: string,
    manufacurer: string,
    name: string,
    price: number,
    seats: number,
    transmission: TransmissionType
  ) {
    this.doors = doors;
    this.fuel = fuel;
    this.img = img;
    this.manufacturer = manufacurer;
    this.name = name;
    this.price = price;
    this.seats = seats;
    this.transmission = transmission;
  }
}

export interface IOrder {
  vehicle: IVehicle;
  totalPrice: number;
  additionalOptions: IAdditionalOption[];
  totalDays: number;
}

export class Order implements IOrder {
  vehicle: IVehicle;
  totalPrice: number;
  additionalOptions: IAdditionalOption[];
  totalDays: number;

  constructor() {
    this.vehicle = new Vehicle(4, "", "", "", "", 0, 4, "automatic");
    this.totalPrice = 0;
    this.additionalOptions = [];
    this.totalDays = 1;
  }

  loadFromStroage() {
    let storedOrder = localStorage.getItem("serializedOrder");
    let parsedData = null;

    try {
      parsedData = JSON.parse(storedOrder ?? "") as IOrder;
      this.vehicle = parsedData.vehicle;
      this.totalPrice = parsedData.totalPrice;
      this.additionalOptions = parsedData.additionalOptions;
      this.totalDays = parsedData.totalDays;
    } catch (e) {
      this.vehicle = new Vehicle(4, "", "", "", "", 0, 4, "automatic");
      this.totalPrice = 0;
      this.additionalOptions = [];
      this.totalDays = 1;
    }
  }

  setNewVehicle(vehicle: IVehicle) {
    localStorage.setItem("serializedOrder", "");
    this.vehicle = vehicle;
    this.additionalOptions = [];
    this.totalDays = 1;
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

  serialize() {
    localStorage.setItem("serializedOrder", JSON.stringify(this));
  }
}
