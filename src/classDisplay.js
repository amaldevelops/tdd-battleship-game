import { Ship } from "./classShip";
import { Gameboard } from "./classGameBoard";
import { Player } from "./classPlayers";

export class Display {
  constructor() {}

  startGame() {
    const startGameButton = document.querySelector("#startGameButton");

    document.addEventListener("DOMContentLoaded", () => {
      startGameButton.addEventListener("click", () => {
        this.updateGameStatusOnDisplay("Yayy Game Started!");
        this.newPlayersInstance = new Player();
        this.newShipA = new Ship("Ship A", 6);
        // console.log(this.newPlayersInstance.humanPlayer());
        this.humanPlayerShipsInitialPlacement();

        this.newPlayersInstance.humanPlayerInitialPlacement(
          this.newShipA,
          "B",
          1
        );
        console.log(
          this.newPlayersInstance.humanPlayerBoardStatus()["board"]["B"][1][
            "shipName"
          ]
        );
        this.renderBoardToDisplay();
      });
    });

    // const ShipA = new Ship("ShipA", 1);
    // this.humanPlayerGameBoard.placeShips(ShipA, "A", 5);
  }

  humanPlayerShipsInitialPlacement() {}

  humanPlayerSelectionsInput() {}

  renderBoardToDisplay() {
    const boardRows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const elements = [];

    // Cache DOM elements for efficiency
    for (const boardRowNum of boardRows) {
      elements[boardRowNum] = [];
      for (let i = 0; i < 10; i++) {
        elements[boardRowNum][i] = document.querySelector(
          `#human${boardRowNum}${i}`
        );
      }
    }

    for (const rowOfHumanGameBoard of boardRows) {
      for (let i = 0; i < 10; i++) {
        const humanPlayerGameBoardCells =
          this.newPlayersInstance.humanPlayerBoardStatus().board[
            rowOfHumanGameBoard
          ][i];
        if (
          humanPlayerGameBoardCells !== null &&
          humanPlayerGameBoardCells !== "X"
        ) {
          elements[rowOfHumanGameBoard][i].textContent =
            humanPlayerGameBoardCells.shipName;
        }
      }
    }
  }

  updateGameStatusOnDisplay(Status) {
    const gameStatusDisplay = document.querySelector("#gameStatusDisplay");
    gameStatusDisplay.textContent = Status;
  }
}
