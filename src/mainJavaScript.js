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
      //   Y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      Y: [null, null, null, null, null, null, null, null, null, null],
    };

    this.board = this.createBoard();
  }

  createBoard() {
    const newBoard = {};
    for (let i = 0; i < this.gameBoardSize.X.length; i++) {
      newBoard[this.gameBoardSize.X[i]] = [...this.gameBoardSize.Y];
    }
    return newBoard;
  }

  placeShips(ship, xStartCords, yStartCords) {
    this.ship = ship;
    this.xStartCords = xStartCords;
    this.yStartCords = yStartCords;
    // console.log(this.yStartCords);

    // if (!this.ship.shipLength+this.yStartCords>9 || !this.ship.shipLength+this.yStartCords<0)
    // {
    //     console.log("Ok to proceed");
    // }

    if (
      this.board[this.xStartCords][this.yStartCords] === null &&
      this.board[this.xStartCords][this.yStartCords + this.ship.shipLength] ===
        null &&
      this.yStartCords + this.ship.shipLength < 9 &&
      this.yStartCords > 0
    ) {
      for (let i = 0; i < this.ship.shipLength; i++) {
        // if (this.board[this.xStartCords][this.yStartCords + i]===null)
        // {

        // }
        this.board[this.xStartCords][this.yStartCords + i] = this.ship;
      }
      return this.board;
    } else {
      return "Error location occupied";
    }
  }
}

export { ship, Gameboard };
