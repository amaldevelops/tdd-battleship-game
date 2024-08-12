export { Player };
import { Gameboard } from "./classGameBoard";
import { Ship } from "./classShip";

class Player {
  constructor() {
    this.humanPlayerGameBoard = new Gameboard();
    this.aiPlayerGameBoard = new Gameboard();
  }

  humanPlayerCurrentGameBoard() {
    return this.humanPlayerGameBoard.gameBoardStatus();
  }

  humanPlayerInitialPlacement(ship, rowCords, columnCords) {
    this.humanPlayerGameBoard.placeShips(ship, rowCords, columnCords);
  }

  aiPlayerCurrentGameBoard() {
    return this.aiPlayerGameBoard.gameBoardStatus();
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  aiPlayerInitialRandomShipPlacement() {
    this.newShipAAi = new Ship("Ship AAi", this.getRndInteger(1, 5));
    this.newShipBAi = new Ship("Ship BAi", this.getRndInteger(1, 5));
    this.newShipCAi = new Ship("Ship CAi", this.getRndInteger(1, 5));
    this.newShipDAi = new Ship("Ship DAi", this.getRndInteger(1, 5));
    this.newShipEAi = new Ship("Ship EAi", this.getRndInteger(1, 5));
    this.newShipFAi = new Ship("Ship FAi", this.getRndInteger(1, 5));
    this.newShipGAi = new Ship("Ship GAi", this.getRndInteger(1, 5));
    this.newShipHAi = new Ship("Ship HAi", this.getRndInteger(1, 5));
    this.newShipIAi = new Ship("Ship IAi", this.getRndInteger(1, 5));
    this.newShipJAi = new Ship("Ship JAi", this.getRndInteger(1, 5));

    this.aiPlayerGameBoard.placeShips(
      this.newShipAAi,
      "A",
      this.getRndInteger(0, 6)
    );
    this.aiPlayerGameBoard.placeShips(
      this.newShipBAi,
      "B",
      this.getRndInteger(0, 6)
    );
    this.aiPlayerGameBoard.placeShips(
      this.newShipCAi,
      "C",
      this.getRndInteger(0, 6)
    );
    this.aiPlayerGameBoard.placeShips(
      this.newShipDAi,
      "D",
      this.getRndInteger(0, 6)
    );
    this.aiPlayerGameBoard.placeShips(
      this.newShipEAi,
      "E",
      this.getRndInteger(0, 6)
    );
    this.aiPlayerGameBoard.placeShips(
      this.newShipFAi,
      "F",
      this.getRndInteger(0, 6)
    );
    this.aiPlayerGameBoard.placeShips(
      this.newShipGAi,
      "G",
      this.getRndInteger(0, 6)
    );
    this.aiPlayerGameBoard.placeShips(
      this.newShipHAi,
      "H",
      this.getRndInteger(0, 6)
    );
    this.aiPlayerGameBoard.placeShips(
      this.newShipIAi,
      "I",
      this.getRndInteger(0, 6)
    );
    this.aiPlayerGameBoard.placeShips(
      this.newShipJAi,
      "J",
      this.getRndInteger(0, 6)
    );

    // console.log(this.newShipAAi);
    // console.log(this.newShipJAi);
    // console.log(this.aiPlayerCurrentGameBoard());
  }
}
