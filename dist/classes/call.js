"use strict";
/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
Object.defineProperty(exports, "__esModule", { value: true });
var Call = /** @class */ (function () {
    function Call(date, time, dialedNumber, duration) {
        this._date = date;
        this._time = time;
        this._dialedNumber = dialedNumber;
        this._duration = duration;
    }
    Object.defineProperty(Call.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Call.prototype, "time", {
        get: function () {
            return this._time;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Call.prototype, "dialedNumber", {
        get: function () {
            return this._dialedNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Call.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        enumerable: false,
        configurable: true
    });
    return Call;
}());
exports.default = Call;
