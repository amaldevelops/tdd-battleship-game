import { Ship, Gameboard, Player } from "./mainJavaScript"; // Class Imports
import {
  ShipA,
  ShipB,
  ShipC,
  ShipD,
  ShipE,
  ShipF,
  ShipG,
  ShipH,
  ShipI,
  ShipJ,
  gameBoardHuman,
  gameBoardAi,
} from "./mainJavaScript"; //Class instance exports

const ship1 = new Ship("Z2", 2);
const ship2 = new Ship("Z3", 1);
const ship3 = new Ship("Z4", 4);
const ship4 = new Ship("Z5", 3);
const ship5 = new Ship("Z6", 5);
const ship6 = new Ship("Z7", 1);
const ship7 = new Ship("Z8", 3);
const ship8 = new Ship("Z9", 4);
const ship9 = new Ship("Z10", 2);
const ship10 = new Ship("Z11", 1);

const newShip = new Ship("Z", 2);
const newShipReturnedObject = {
  shipName: "Z",
  shipLength: 2,
  numberOfHits: 0,
  shipSunk: false,
};

const newGameBoard = new Gameboard();

const newShipDamage = {
  shipName: "Z",
  shipLength: 2,
  numberOfHits: 1,
  shipSunk: false,
};

const newShipSunk = {
  shipName: "Z",
  shipLength: 2,
  numberOfHits: 2,
  shipSunk: true,
};

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

const gameBoardHumanTenShipsPlacedObject={
  A: [null, null, null, null, null, ShipA, null, null, null, null],
  B: [ShipB, ShipB, null, null, null, null, null, null, null, null],
  C: [null, null, null, null, null, ShipC, ShipC, ShipC, ShipC, null],
  D: [null, null, null, null, null, null, null, null, ShipD,null ],
  E: [null, null, null, null, null, null, ShipE, null, null, null],
  F: [null, ShipF, null, null, null, null, null, null, null, null],
  G: [null, null, null, null, ShipG, ShipG, null, null, null, null],
  H: [null, null, null, null, null, ShipH, ShipH, ShipH, null, null],
  I: [null, null, null, null, null, null, null, null, ShipI,null],
  J: [null, null, ShipJ, ShipJ, ShipJ, ShipJ, null, null, null, null],
};



const ShipATestObject = {
  shipName: "ShipA",
  shipLength: 1,
  numberOfHits: 0,
  shipSunk: false,
};

const ShipBTestObject = {
  shipName: "ShipB",
  shipLength: 2,
  numberOfHits: 0,
  shipSunk: false,
};

const ShipCTestObject = {
  shipName: "ShipC",
  shipLength: 4,
  numberOfHits: 0,
  shipSunk: false,
};
const ShipDTestObject = {
  shipName: "ShipD",
  shipLength: 1,
  numberOfHits: 0,
  shipSunk: false,
};

const ShipETestObject = {
  shipName: "ShipE",
  shipLength: 1,
  numberOfHits: 0,
  shipSunk: false,
};

const ShipFTestObject = {
  shipName: "ShipF",
  shipLength: 1,
  numberOfHits: 0,
  shipSunk: false,
};

const ShipGTestObject = {
  shipName: "ShipG",
  shipLength: 2,
  numberOfHits: 0,
  shipSunk: false,
};

const ShipHTestObject = {
  shipName: "ShipH",
  shipLength: 3,
  numberOfHits: 0,
  shipSunk: false,
};

const ShipITestObject = {
  shipName: "ShipI",
  shipLength: 1,
  numberOfHits: 0,
  shipSunk: false,
};

const ShipJTestObject = {
  shipName: "ShipJ",
  shipLength: 4,
  numberOfHits: 0,
  shipSunk: false,
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
    "Error location occupied or out of bounds"
  );
});

test("Test 9:This test will check whether ship5 can be placed on the board in ship1 saved previous coordinates of start at {A:2} ship length 5 so placing the ship at A[1],A[2],A[3],A[4] should give out an error", () => {
  expect(newGameBoard.placeShips(ship5, "A", 2)).toStrictEqual(
    "Error location occupied or out of bounds"
  );
});

test("Test 10:This test will checfalsek whether ship8 can be placed on the board at {B:7} ship length 4 so by trying to place the ship at B[7],B[8],B[9],B[10] should give out an error as it is out of bounds", () => {
  expect(newGameBoard.placeShips(ship8, "B", 7)).toStrictEqual(
    "Error location occupied or out of bounds"
  );
});
false;

test("Test 11:This test will check whether ship8 can be placed on the board at {B:-1} ship length 4 so by trying to place the ship at B[-1],B[-2],B[-3],B[-4] should give out an error as it is out of bounds", () => {
  expect(newGameBoard.placeShips(ship8, "C", -1)).toStrictEqual(
    "Error location occupied or out of bounds"
  );
});

test("Test 12: This test will send an attack to Ship1 at A:1 Location and see whether that got recorded in the ship1 object", () => {
  newGameBoard.receiveAttack("A", 1);

  expect(ship1.shipStatus()).toStrictEqual({
    shipName: "Z2",
    numberOfHits: 1,
    shipLength: 2,
    shipSunk: false,
  });
});

test("Test 13: This test will send an attack to Ship1 at A:2 Location and see whether that got recorded in the ship1 object", () => {
  newGameBoard.receiveAttack("A", 2);

  expect(ship1.shipStatus()).toStrictEqual({
    shipName: "Z2",
    numberOfHits: 2,
    shipLength: 2,
    shipSunk: true,
  });
});

test("Test 14: This test will send an attack to Ship1 at A:5 Location and see whether that got recorded in the board object as there are no ship objects saved there", () => {
  newGameBoard.receiveAttack("A", 5);

  expect(newGameBoard.board["A"][5]).toStrictEqual("Hit");
});

test("Test 15: Gameboards should be able to report whether or not all of their ships have been sunk.", () => {
  newGameBoard.placeShips(ship6, "C", 1);

  expect(newGameBoard.allShipsHealth()).toStrictEqual(9);
});

test("Test 16: There will be two types of players in the game, human players and computer/Ai playersEach player object should contain its own gameboard, this test will check for human player gameBoard is created properly", () => {
  const new2Players = new Player();

  expect(new2Players.humanPlayer()).toStrictEqual(testBoard);
});

test("Test 17: There will be two types of players in the game, human players and computer/Ai playersEach player object should contain its own gameboard, this test will check for AI player gameBoard is created properly", () => {
  const new2Players = new Player();

  expect(new2Players.aiPlayer()).toStrictEqual(testBoard);
});

test("Test 18: At the game start 10 Ship class instances will be created name ShipA,ShipB,ShipC,ShipD,ShipE,ShipF,ShipG,ShipH,ShipI,ShipJ, this test will check whether they are correctly created", () => {
  expect(ShipA.shipStatus()).toStrictEqual(ShipATestObject);

  expect(ShipB.shipStatus()).toStrictEqual(ShipBTestObject);

  expect(ShipC.shipStatus()).toStrictEqual(ShipCTestObject);

  expect(ShipD.shipStatus()).toStrictEqual(ShipDTestObject);

  expect(ShipE.shipStatus()).toStrictEqual(ShipETestObject);

  expect(ShipF.shipStatus()).toStrictEqual(ShipFTestObject);

  expect(ShipG.shipStatus()).toStrictEqual(ShipGTestObject);

  expect(ShipH.shipStatus()).toStrictEqual(ShipHTestObject);

  expect(ShipI.shipStatus()).toStrictEqual(ShipITestObject);

  expect(ShipJ.shipStatus()).toStrictEqual(ShipJTestObject);
});

test("Test 19: This will test Human player and Computer GameBoard are created correctly", () => {
  expect(gameBoardHuman.gameBoardStatus()).toStrictEqual(gameBoardHumanTenShipsPlacedObject);
  expect(gameBoardAi.gameBoardStatus()).toStrictEqual(testBoard);
});

test ("Test 20: This will test Human Player board with 10 ships placed according to the default coordinates",()=>{
console.log(gameBoardHumanTenShipsPlacedObject);
console.log(gameBoardHuman.gameBoardStatus());

expect (gameBoardHuman.gameBoardStatus()).toStrictEqual(gameBoardHumanTenShipsPlacedObject);
});
