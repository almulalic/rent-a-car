export interface ISupervisorInfo {
  fullName: string;
  age: number;
}

export interface IPersonalInfo {
  fullName: string;
  age: number;
  emailAddress: string;
  country: string;
  contactNumber: string;
  countryCallPrefix: string;
  supervisor: ISupervisorInfo | null;
  serialize();
}

export class PersonalInfo implements IPersonalInfo {
  fullName: string;
  age: number;
  emailAddress: string;
  country: string;
  contactNumber: string;
  countryCallPrefix: string;
  supervisor: ISupervisorInfo | null;

  constructor(
    fullName: string = "",
    age: number = 0,
    emailAddress: string = "",
    country: string = "",
    contactNumber: string = "",
    countryCallPrefix: string = "",
    supervisor: ISupervisorInfo | null = null
  ) {
    this.fullName = fullName;
    this.age = age;
    this.emailAddress = emailAddress;
    this.country = country;
    this.contactNumber = contactNumber;
    this.countryCallPrefix = countryCallPrefix;
    this.supervisor = supervisor;
  }

  serialize() {
    localStorage.setItem("personalInfo", JSON.stringify(this));
  }
}
