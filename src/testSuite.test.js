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

// const testBoard = {
//   A: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   B: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   C: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   D: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   E: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   F: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   G: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   H: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   I: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   J: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
// };

const testBoard = {
    A: [null,null,null,null,null,null,null,null,null,null],
    B: [null,null,null,null,null,null,null,null,null,null],
    C: [null,null,null,null,null,null,null,null,null,null],
    D: [null,null,null,null,null,null,null,null,null,null],
    E: [null,null,null,null,null,null,null,null,null,null],
    F: [null,null,null,null,null,null,null,null,null,null],
    G: [null,null,null,null,null,null,null,null,null,null],
    H: [null,null,null,null,null,null,null,null,null,null],
    I: [null,null,null,null,null,null,null,null,null,null],
    J: [null,null,null,null,null,null,null,null,null,null]
  };

const ship1 = new ship(2);
const ship2 = new ship(1);
const ship3 = new ship(4);
const ship4 = new ship(3);
const ship5 = new ship(5);
const ship6 = new ship(1);
const ship7 = new ship(3);
const ship8 = new ship(4);
const ship9 = new ship(2);
const ship10 = new ship(1);

// const shipPlacement = {
//   A: [0, ship1, ship1, 3, 4, 5, 6, 7, 8, 9],
//   B: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   C: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   D: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   E: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   F: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   G: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   H: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   I: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//   J: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
// };

const shipPlacement = {
    A: [null,ship1,ship1,null,null,null,null,null,null,null],
    B: [null,null,null,null,null,null,null,null,null,null],
    C: [null,null,null,null,null,null,null,null,null,null],
    D: [null,null,null,null,null,null,null,null,null,null],
    E: [null,null,null,null,null,null,null,null,null,null],
    F: [null,null,null,null,null,null,null,null,null,null],
    G: [null,null,null,null,null,null,null,null,null,null],
    H: [null,null,null,null,null,null,null,null,null,null],
    I: [null,null,null,null,null,null,null,null,null,null],
    J: [null,null,null,null,null,null,null,null,null,null]
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
  expect(newGameBoard.createBoard()).toStrictEqual(testBoard);
});

test("This test will check whether ship1 can be placed on the board in specific coordinates of start at {A:1} ship length 2 so placing the ship at A[1],A[2]", () => {
  expect(newGameBoard.placeShips(ship1, "A", 1)).toStrictEqual(shipPlacement);
});

test("This test will check whether ship3 can be placed on the board in ship2 saved previous coordinates of start at {A:1} ship length 4 so placing the ship at A[1],A[2],A[3],A[4] should give out an error" , () => {
    expect(newGameBoard.placeShips(ship1, "A", 1)).toStrictEqual("Error location occupied");
  });

