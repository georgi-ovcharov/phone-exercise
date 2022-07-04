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
  phoneInfo(): string;
  deleteCall(): void;
  addCall(): void;
  model: string;
  manufacturer: string;
  price: number;
  owner: string;
  battery: BatteryModel;
  display: DisplayModel;
  callHistory: string | number[];
}