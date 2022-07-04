import {
  BatteryModel,
  DisplayModel,
  PhoneModel,
} from "../models/models";

import Call from "./call";

export default class Phone implements PhoneModel {
  public callHistory: any[];

  private _model: string;
  private _manufacturer: string;
  private _price?: number;
  private _owner?: string;
  private _battery?: BatteryModel;
  private _display?: DisplayModel;

  get model(): string {
    return this._model;
  }

  get manufacturer(): string {
    return this._manufacturer;
  }

  get price(): number {
    return this._price;
  }

  get owner(): string {
   return this._owner;
  }

  set owner(value: string) {
    this._owner = value;
  }

  get battery(): BatteryModel {
    return this._battery;
  }

  get display(): DisplayModel {
    return this._display;
  }

  constructor(
    model: string,
    manufacturer: string,
    price?: number,
    owner?: string,
    battery?: BatteryModel,
    display?: DisplayModel
  ) {
    this._model = model;
    this._manufacturer = manufacturer;
    this._price = price;
    this._owner = owner;
    this._battery = battery;
    this._display = display;
    this.callHistory = [];
  }

  public phoneInfo(): string {
    let message = `Model: ${this._model}\nManufacturer: ${this._manufacturer}`;
    if (this._price) {
      message += `\nPrice: ${this._price}`;
    }
    if (this._owner) {
      message += `\nOwner: ${this._owner}`;
    }
    if (this._battery) {
      message += `Battery:\n Model: ${this._battery.model}\n hoursIde: ${this._battery.hoursIdle}\n hoursTalk: ${this._battery.hoursTalk}`;
    }
    if (this._display) {
      message += `\nDisplay: \n colors: ${this._display.colors}\n size: ${this.display.size}"`;
    }

    return message;
  }

  public makeCall(): void {
    const date = new Date();
    const time = `${date.getHours()}:${
      date.getMinutes() < 10 ? "0" : ""
    }${date.getMinutes()}`;
    const dialedNumber = Math.floor(359880000000 + Math.random() * 900000);
    const duration = Math.floor(Math.random() * 1000);

    const newCall = new Call(date, time, dialedNumber, duration);

    const callHistoryObj = {
      date: newCall.date,
      time: newCall.time,
      dialedNumber: newCall.dialedNumber,
      duration: newCall.duration,
    };

    console.log(callHistoryObj);

    this.callHistory.push(callHistoryObj);
  }

  public totalPrice(): void {
    if (this.callHistory.length < 1) {
      console.log("There were no calls made by this phone");
      return;
    }
    let totalSeconds = 0;
    this.callHistory.forEach((call) => (totalSeconds += call.duration));
    const pricePerMinute = 0.13;
    const totalSum = ((totalSeconds / 60) * pricePerMinute).toFixed(2);

    console.log(`Total Price of the calls is ${totalSum}lv`);
  }

  public clearHistory(): void {
    this.callHistory = [];
    console.log("History cleared");
  }

  public deleteCall(): void {
    this.callHistory.pop();
  }

  public addCall(): void {
    this.makeCall();
  }
}