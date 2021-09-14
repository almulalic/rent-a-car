export interface ISupervisor {
  fullName: string;
  age: number;
}

export interface IUser {
  id: number;
  fullName: string;
  age: number;
  emailAddress: string;
  country: string;
  contactNumber: string;
  countryCallPrefix: string;
  supervisor: ISupervisor;
  password: string;
}

export class Supervisor implements ISupervisor {
  fullName: string;
  age: number;

  constructor(fullName: string, age: number) {
    this.fullName = fullName;
    this.age = age;
  }
}

export class User implements IUser {
  id: number;
  fullName: string;
  age: number;
  emailAddress: string;
  country: string;
  contactNumber: string;
  countryCallPrefix: string;
  supervisor: ISupervisor | null;
  password: string;

  constructor(
    id: number,
    fullName: string,
    age: number,
    emailAddress: string,
    country: string,
    contactNumber: string,
    countryCallPrefix: string,
    supervisor: ISupervisor,
    password: string
  ) {
    this.id = id;
    this.fullName = fullName;
    this.age = age;
    this.emailAddress = emailAddress;
    this.country = country;
    this.contactNumber = contactNumber;
    this.countryCallPrefix = countryCallPrefix;
    this.supervisor = supervisor;
    this.password = password;
  }
}
