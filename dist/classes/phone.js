"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var call_1 = require("./call");
var Phone = /** @class */ (function () {
    function Phone(model, manufacturer, price, owner, battery, display) {
        this._model = model;
        this._manufacturer = manufacturer;
        this._price = price;
        this._owner = owner;
        this._battery = battery;
        this._display = display;
        this.callHistory = [];
    }
    Object.defineProperty(Phone.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "manufacturer", {
        get: function () {
            return this._manufacturer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        set: function (value) {
            this._owner = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "battery", {
        get: function () {
            return this._battery;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "display", {
        get: function () {
            return this._display;
        },
        enumerable: false,
        configurable: true
    });
    Phone.prototype.phoneInfo = function () {
        var message = "Model: ".concat(this._model, "\nManufacturer: ").concat(this._manufacturer);
        if (this._price) {
            message += "\nPrice: ".concat(this._price);
        }
        if (this._owner) {
            message += "\nOwner: ".concat(this._owner);
        }
        if (this._battery) {
            message += "Battery:\n Model: ".concat(this._battery.model, "\n hoursIde: ").concat(this._battery.hoursIdle, "\n hoursTalk: ").concat(this._battery.hoursTalk);
        }
        if (this._display) {
            message += "\nDisplay: \n colors: ".concat(this._display.colors, "\n size: ").concat(this.display.size, "\"");
        }
        return message;
    };
    Phone.prototype.makeCall = function () {
        var date = new Date();
        var time = "".concat(date.getHours(), ":").concat(date.getMinutes() < 10 ? "0" : "").concat(date.getMinutes());
        var dialedNumber = Math.floor(359880000000 + Math.random() * 900000);
        var duration = Math.floor(Math.random() * 1000);
        var newCall = new call_1.default(date, time, dialedNumber, duration);
        var callHistoryObj = {
            date: newCall.date,
            time: newCall.time,
            dialedNumber: newCall.dialedNumber,
            duration: newCall.duration,
        };
        console.log(callHistoryObj);
        this.callHistory.push(callHistoryObj);
    };
    Phone.prototype.showHistory = function () {
    };
    Phone.prototype.totalPrice = function () {
        if (this.callHistory.length < 1) {
            console.log("There were no calls made by this phone");
            return;
        }
        var totalSeconds = 0;
        this.callHistory.forEach(function (call) { return (totalSeconds += call.duration); });
        var pricePerMinute = 0.13;
        var totalSum = ((totalSeconds / 60) * pricePerMinute).toFixed(2);
        console.log("Total Price of the calls is ".concat(totalSum, "lv"));
    };
    Phone.prototype.clearHistory = function () {
        this.callHistory = [];
        console.log("History cleared");
    };
    Phone.prototype.deleteCall = function () {
        this.callHistory.pop();
    };
    Phone.prototype.addCall = function () {
        this.makeCall();
    };
    return Phone;
}());
exports.default = Phone;
