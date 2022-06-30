/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */

import { CallModel } from "../models/models";

export default class Call implements CallModel {
  private _date: Date;
  
  private _time: string;

  private _dialedNumber: number;

  private _duration: number;

  get date(): Date {
    return this._date;
  }

  get time(): string {
    return this._time;
  }

  get dialedNumber(): number {
    return this._dialedNumber;
  }

  get duration(): number {
    return this._duration;
  }

  constructor(
    date: Date,
    time: string,
    dialedNumber: number,
    duration: number
  ) {
    this._date = date;
    this._time = time;
    this._dialedNumber = dialedNumber;
    this._duration = duration;
  }
}
