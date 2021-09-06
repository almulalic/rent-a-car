import { IPersonalInfo, IPaymentInfo, PersonalInfo, PaymentInfo } from ".";

export interface ICustomer {
  perosnal: IPersonalInfo;
  payment: IPaymentInfo;
  setNewCustomer(
    firstName: string,
    lastName: string,
    age: number,
    emailAddress: string,
    country: string,
    contactNumber: string
  ): void;
  setPersonalInfo(personal: IPersonalInfo): void;
  setNewPayment(payment: string): void;
  setPaymentInfo(payment: IPaymentInfo): void;
}

export class Customer implements ICustomer {
  perosnal: IPersonalInfo;
  payment: IPaymentInfo;

  constructor() {
    this.perosnal = new PersonalInfo();
    this.payment = new PaymentInfo();
  }

  setNewCustomer(
    firstName: string,
    lastName: string,
    age: number,
    emailAddress: string,
    country: string,
    contactNumber: string
  ) {
    this.perosnal = new PersonalInfo(firstName, lastName, age, emailAddress, country, contactNumber);
  }

  setPersonalInfo(personal: IPersonalInfo): void {
    this.perosnal = personal;
  }

  setNewPayment(payment: string): void {
    this.payment = new PaymentInfo(payment);
  }

  setPaymentInfo(payment: IPaymentInfo): void {
    this.payment = payment;
  }
}
