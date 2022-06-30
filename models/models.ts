/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

export enum BatteryType {
  LiIon = "Li-Ion",
  NiMH = "NiMH",
  NiCD = "NiCD",
}

export interface BatteryModel {
  model: BatteryType;
  hoursIdle: number;
  hoursTalk: number;
}

export interface DisplayModel {
  size: number;
  colors: number;
}

export interface CallModel {
  date: Date;
  time: string;
  dialedNumber: number;
  duration: number;
}

export interface PhoneModel {
  model: string;
  manufacturer: string;
  price: number;
  owner: string;
  battery: BatteryModel;
  display: DisplayModel;
  phoneInfo(): string;
  callHistory: string | number[];
}
