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
