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
    return this.humanPlayerGameBoard.gameBoardStatus();
  }

  aiPlayer() {
    // this.aiPlayerGameBoard = this.newGame.createBoard();
    return this.aiPlayerGameBoard.gameBoardStatus();
  }
}
