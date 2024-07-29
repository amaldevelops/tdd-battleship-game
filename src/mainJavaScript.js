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
    // this.createdBoard=this.board;
  }

  createBoard() {
    const newBoard = {};
    for (let i = 0; i < this.gameBoardSize.X.length; i++) {
        newBoard[this.gameBoardSize.X[i]] = this.gameBoardSize.Y;
    }
    return newBoard;
  }

  placeShips(ship,cords)
  {
    let testBoard=this.board;
    // this.cords=cords;
    
    // this.xStartCords=cords.A;
    // this.yStartCords=cords.value;
    // this.shipInstance=ship;
    // this.shipLength=this.shipInstance.shipLength;
    testBoard["A"][9]="ship";
    // testBoard['A'][2]="ship";
    return testBoard;
  }

}

export { ship, Gameboard };