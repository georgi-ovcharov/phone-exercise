"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
var phone_1 = require("./classes/phone");
var models_1 = require("./models/models");
function main() {
    var phone = new phone_1.default("3310", "Nokia", 100, "Kris", { hoursIdle: 100, hoursTalk: 200, model: models_1.BatteryType.LiIon }, { colors: 256, size: 4 });
    console.log(phone.phoneInfo());
    phone.makeCall();
    phone.makeCall();
    phone.makeCall();
    phone.makeCall();
    phone.totalPrice();
    console.log(phone.callHistory);
    phone.clearHistory();
    console.log("Cleared");
    phone.makeCall();
    phone.makeCall();
    console.log(phone.callHistory);
    phone.totalPrice();
}
main();
