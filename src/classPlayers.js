export { Player };
import { Gameboard } from "./classGameBoard";

class Player {
  constructor() {
    this.newGame = new Gameboard();
  }

  humanPlayer() {
    this.humanPlayerGameBoard = this.newGame.createBoard();
    return this.humanPlayerGameBoard;
  }

  aiPlayer() {
    this.aiPlayerGameBoard = this.newGame.createBoard();
    return this.aiPlayerGameBoard;
  }
}
