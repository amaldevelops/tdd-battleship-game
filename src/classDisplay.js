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
        this.newPlayersHumanAndAi = new Player();
        this.humanPlayerShipsInitialPlacement();

        console.log(
          this.newPlayersHumanAndAi.humanPlayerBoardStatus()["board"]["B"][1][
            "shipName"
          ]
        );
        this.renderBoardToDisplay();
      });
    });

    // const ShipA = new Ship("ShipA", 1);
    // this.humanPlayerGameBoard.placeShips(ShipA, "A", 5);
  }

  humanPlayerShipsInitialPlacement() {
    this.newShipA = new Ship("Ship A", 1);
    this.newShipB = new Ship("Ship B", 2);
    this.newShipC = new Ship("Ship C", 4);
    this.newShipD = new Ship("Ship D", 1);
    this.newShipE = new Ship("Ship E", 1);
    this.newShipF = new Ship("Ship F", 1);
    this.newShipG = new Ship("Ship G", 2);
    this.newShipH = new Ship("Ship H", 3);
    this.newShipI = new Ship("Ship I", 1);
    this.newShipJ = new Ship("Ship J", 4);

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipA,
      "A",
      5
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipB,
      "B",
      0
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipC,
      "C",
      5
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipD,
      "D",
      8
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipE,
      "E",
      6
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipF,
      "F",
      1
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipG,
      "G",
      4
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipH,
      "H",
      5
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipI,
      "I",
      8
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipJ,
      "J",
      2
    );
  }

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
          this.newPlayersHumanAndAi.humanPlayerBoardStatus().board[
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
