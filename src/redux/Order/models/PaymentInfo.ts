export interface IPaymentInfo {
  payment: string;
}

export class PaymentInfo implements IPaymentInfo {
  payment: string;

  constructor(paymnet: string = "") {
    this.payment = paymnet;
  }
}
