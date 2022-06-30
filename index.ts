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
