import { ship } from "./mainJavaScript";

const newShip = new ship(2);
const newShipReturnedObject = {
  shipLength: 2,
  numberOfHits: 0,
  shipSunk: false,
};

const newShipDamage = { shipLength: 2, numberOfHits: 1, shipSunk: false };

const newShipSunk = { shipLength: 2, numberOfHits: 2, shipSunk: true };

test("This test will check for Ship Status when first initialized", () => {
  expect(newShip.shipStatus()).toStrictEqual(newShipReturnedObject);
});

test("This test will check whether ship is NOT Sunk", () => {
  expect(newShip.isSunk()).toStrictEqual(false);
});

test("This test will check for Ships Damage after 1 hit", () => {
  newShip.hit();
  expect(newShip.shipStatus()).toStrictEqual(newShipDamage);
});

test("This test will check for Ships Damage after 2 hits", () => {
  newShip.hit();
  newShip.hit();
  newShip.hit();

  expect(newShip.shipStatus()).toStrictEqual(newShipSunk);
});

test("This test will check whether ship is Sunk", () => {
  expect(newShip.isSunk()).toStrictEqual(true);
});
