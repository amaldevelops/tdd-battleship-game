export { Player };
import { Gameboard } from "./classGameBoard";
import { Ship } from "./classShip";

class Player {
  constructor() {
    this.humanPlayerGameBoard = new Gameboard();
    this.aiPlayerGameBoard = new Gameboard();
  }

  humanPlayer() {
    // this.humanPlayerGameBoard = this.newGame.createBoard();
    // this.humanPlayerGameBoard.placeShips("Test","B",1);
    // this.humanPlayerGameBoard["B"]="Test"
    // this.humanPlayerInitialPlacement();

    return this.humanPlayerGameBoard.gameBoardStatus();
  }

  humanPlayerInitialPlacement(ship, rowCords, columnCords) {
    this.humanPlayerGameBoard.placeShips(ship, rowCords, columnCords);
    // console.log(this.humanPlayerGameBoard);
  }

  humanPlayerBoardStatus() {
    return this.humanPlayerGameBoard;
  }

  aiPlayer() {
    // this.aiPlayerGameBoard = this.newGame.createBoard();
    return this.aiPlayerGameBoard.gameBoardStatus();
  }
}
