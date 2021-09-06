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
