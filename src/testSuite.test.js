import { ship, Gameboard } from "./mainJavaScript";

const newShip = new ship(2);
const newShipReturnedObject = {
  shipLength: 2,
  numberOfHits: 0,
  shipSunk: false,
};

const newGameBoard = new Gameboard();

const newShipDamage = { shipLength: 2, numberOfHits: 1, shipSunk: false };

const newShipSunk = { shipLength: 2, numberOfHits: 2, shipSunk: true };

const testBoard = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
];

const testBoard2 = {
  A: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  B: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  C: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  D: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  E: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  F: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  G: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  H: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  I: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  J: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
};

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

test("This test will check whether GameBoard is created properly", () => {
  expect(newGameBoard.createBoard()).toStrictEqual(testBoard2);
});
