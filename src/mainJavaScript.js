//This is the main JavaScript file

//ES Module Imports
//Following will import the CSS file used to style the project
import "./mainStyleSheet.css";

class ship {
  constructor(shipLength) {
    this.shipLength = shipLength;
    this.numberOfHits = 0;
    this.shipSunk = false;
  }

  hit() {
    if (!this.shipSunk) {
      this.numberOfHits += 1;
    }
    if (this.numberOfHits >= this.shipLength) {
      this.shipSunk = true;
    }
  }

  isSunk() {
    return this.shipSunk;
  }

  shipStatus() {
    this.shipInfoObject = {
      shipLength: this.shipLength,
      numberOfHits: this.numberOfHits,
      shipSunk: this.shipSunk,
    };
    return this.shipInfoObject;
  }
}

class Gameboard {
  constructor() {
    this.gameBoardSize = {
      X: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
      Y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };

    this.board = this.createBoard();
  }

  createBoard() {
    const board = {};
    for (let i = 0; i < this.gameBoardSize.X.length; i++) {
      board[this.gameBoardSize.X[i]] = this.gameBoardSize.Y;
    }
    return board;
  }
}

export { ship, Gameboard };
