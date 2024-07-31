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
  A: [null, null, null, null, null, null, null, null, null, null],
  B: [null, null, null, null, null, null, null, null, null, null],
  C: [null, null, null, null, null, null, null, null, null, null],
  D: [null, null, null, null, null, null, null, null, null, null],
  E: [null, null, null, null, null, null, null, null, null, null],
  F: [null, null, null, null, null, null, null, null, null, null],
  G: [null, null, null, null, null, null, null, null, null, null],
  H: [null, null, null, null, null, null, null, null, null, null],
  I: [null, null, null, null, null, null, null, null, null, null],
  J: [null, null, null, null, null, null, null, null, null, null],
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
  A: [null, ship1, ship1, null, null, null, null, null, null, null],
  B: [null, null, null, null, null, null, null, null, null, null],
  C: [null, null, null, null, null, null, null, null, null, null],
  D: [null, null, null, null, null, null, null, null, null, null],
  E: [null, null, null, null, null, null, null, null, null, null],
  F: [null, null, null, null, null, null, null, null, null, null],
  G: [null, null, null, null, null, null, null, null, null, null],
  H: [null, null, null, null, null, null, null, null, null, null],
  I: [null, null, null, null, null, null, null, null, null, null],
  J: [null, null, null, null, null, null, null, null, null, null],
};

test("Test 1:This test will check for Ship Status when first initialized", () => {
  expect(newShip.shipStatus()).toStrictEqual(newShipReturnedObject);
});

test("Test 2:This test will check whether ship is NOT Sunk", () => {
  expect(newShip.isSunk()).toStrictEqual(false);
});

test("Test 3:This test will check for Ships Damage after 1 hit", () => {
  newShip.hit();
  expect(newShip.shipStatus()).toStrictEqual(newShipDamage);
});

test("Test 4:This test will check for Ships Damage after 2 hits", () => {
  newShip.hit();
  newShip.hit();
  expect(newShip.shipStatus()).toStrictEqual(newShipSunk);
});

test("Test 5:This test will check whether ship is Sunk", () => {
  expect(newShip.isSunk()).toStrictEqual(true);
});

test("Test 6:This test will check whether GameBoard is created properly", () => {
  expect(newGameBoard.createBoard()).toStrictEqual(testBoard);
});

test("Test 7:This test will check whether ship1 can be placed on the board in specific coordinates of start at {A:1} ship length 2 so placing the ship at A[1],A[2]", () => {
  expect(newGameBoard.placeShips(ship1, "A", 1)).toStrictEqual(shipPlacement);
});

test("Test 8:This test will check whether ship3 can be placed on the board in ship2 saved previous coordinates of st1e out an error", () => {
  expect(newGameBoard.placeShips(ship3, "A", 1)).toStrictEqual(
    "Error location occupied"
  );
});

test("Test 9:This test will check whether ship5 can be placed on the board in ship1 saved previous coordinates of start at {A:2} ship length 5 so placing the ship at A[1],A[2],A[3],A[4] should give out an error", () => {
  expect(newGameBoard.placeShips(ship5, "A", 2)).toStrictEqual(
    "Error location occupied"
  );
});

test("Test 10:This test will checfalsek whether ship8 can be placed on the board at {B:7} ship length 4 so by trying to place the ship at B[7],B[8],B[9],B[10] should give out an error as it is out of bounds", () => {
  expect(newGameBoard.placeShips(ship8, "B", 7)).toStrictEqual(
    "Error location occupied"
  );
});
false;

test("Test 11:This test will check whether ship8 can be placed on the board at {B:-1} ship length 4 so by trying to place the ship at B[-1],B[-2],B[-3],B[-4] should give out an error as it is out of bounds", () => {
  expect(newGameBoard.placeShips(ship8, "C", -1)).toStrictEqual(
    "Error location occupied"
  );
});

test("Test 12: This test will send an attack to Ship1 at A:1 Location and see whether that got recorded in the ship1 object", () => {
  newGameBoard.receiveAttack("A", 1);
  console.log(newGameBoard.board["A"][1]["numberOfHits"]);
  console.log(newGameBoard.board["A"][1]);
  expect(ship1.shipStatus()).toStrictEqual({
    numberOfHits: 1,
    shipLength: 2,
    shipSunk: false,
  });
});

test("Test 13: This test will send an attack to Ship1 at A:2 Location and see whether that got recorded in the ship1 object", () => {
  newGameBoard.receiveAttack("A", 2);

  console.log(newGameBoard.board["A"][2]["numberOfHits"]);
  console.log(newGameBoard.board["A"][2]);
  expect(ship1.shipStatus()).toStrictEqual({
    numberOfHits: 2,
    shipLength: 2,
    shipSunk: true,
  });
});

test("Test 14: This test will send an attack to Ship1 at A:5 Location and see whether that got recorded in the board object as there are no ship objects saved there", () => {
  newGameBoard.receiveAttack("A", 5);

  console.log(newGameBoard.board["A"][5]["numberOfHits"]);
  console.log(newGameBoard.board["A"][5]);
  expect(newGameBoard.board["A"][5]).toStrictEqual("Hit");
});
