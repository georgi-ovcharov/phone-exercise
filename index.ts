/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Phone from "./classes/phone";
import { BatteryType } from "./models/models";

function main() {
  const phone: Phone = new Phone(
    "3310",
    "Nokia",
    100,
    "Kris",
    { hoursIdle: 100, hoursTalk: 200, model: BatteryType.LiIon },
    { colors: 256, size: 4 }
  );

  console.log(phone.phoneInfo());

  console.log("Make 2 calls:");
  phone.makeCall();
  phone.makeCall();

  phone.totalPrice();
  
  console.log("History:");
  console.log(phone.callHistory.forEach((row) => console.log(row))) // where does the undefined come from?

  phone.clearHistory();
  console.log("History cleared");

  console.log("History:");
  console.log(phone.callHistory.forEach((row) => console.log(row)))

  console.log("Make 3 calls:");
  phone.makeCall();
  phone.makeCall();
  phone.makeCall();

  console.log("Add a call:");
  phone.addCall();

  console.log("History:");
  console.log(phone.callHistory.forEach((row) => console.log(row)))

  phone.totalPrice();
}

main();
