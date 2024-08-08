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
          this.newPlayersHumanAndAi.humanPlayerBoardStatus()
          //["board"]["B"][1]["shipName"]
        );
        this.renderBoardToDisplay();
      });
    });

    // const ShipA = new Ship("ShipA", 1);
    // this.humanPlayerGameBoard.placeShips(ShipA, "A", 5);
  }

  convertCords(inputArray) {
    const inputString = inputArray[0];
    const letter = inputString[0];
    const number = parseInt(inputString.substring(2));

    return { letter, number };
  }

  humanPlayerShipsInitialPlacement() {
    const shipStartCordsLength = new FormData(
      document.querySelector("#shipStartCordsLength")
    );

    // Following code will get the Coordinate data from the Form
    let shipACords = this.convertCords(
      shipStartCordsLength.getAll("shipACords")
    );

    let shipBCords = this.convertCords(
      shipStartCordsLength.getAll("shipBCords")
    );

    let shipCCords = this.convertCords(
      shipStartCordsLength.getAll("shipCCords")
    );

    let shipDCords = this.convertCords(
      shipStartCordsLength.getAll("shipDCords")
    );

    let shipECords = this.convertCords(
      shipStartCordsLength.getAll("shipECords")
    );

    let shipFCords = this.convertCords(
      shipStartCordsLength.getAll("shipFCords")
    );

    let shipGCords = this.convertCords(
      shipStartCordsLength.getAll("shipGCords")
    );

    let shipHCords = this.convertCords(
      shipStartCordsLength.getAll("shipHCords")
    );

    let shipICords = this.convertCords(
      shipStartCordsLength.getAll("shipICords")
    );

    let shipJCords = this.convertCords(
      shipStartCordsLength.getAll("shipJCords")
    );

    // This code will get ship length from the Form
    let shipALength = parseInt(shipStartCordsLength.getAll("shipALength"));
    let shipBLength = parseInt(shipStartCordsLength.getAll("shipBLength"));
    let shipCLength = parseInt(shipStartCordsLength.getAll("shipCLength"));
    let shipDLength = parseInt(shipStartCordsLength.getAll("shipDLength"));
    let shipELength = parseInt(shipStartCordsLength.getAll("shipELength"));
    let shipFLength = parseInt(shipStartCordsLength.getAll("shipFLength"));
    let shipGLength = parseInt(shipStartCordsLength.getAll("shipGLength"));
    let shipHLength = parseInt(shipStartCordsLength.getAll("shipHLength"));
    let shipILength = parseInt(shipStartCordsLength.getAll("shipILength"));
    let shipJLength = parseInt(shipStartCordsLength.getAll("shipJLength"));

    // console.log(shipStartCordsLength.getAll("shipALength"));
    // console.log(testCords.number);

    this.newShipA = new Ship("Ship A", shipALength);
    this.newShipB = new Ship("Ship B", shipBLength);
    this.newShipC = new Ship("Ship C", shipCLength);
    this.newShipD = new Ship("Ship D", shipDLength);
    this.newShipE = new Ship("Ship E", shipELength);
    this.newShipF = new Ship("Ship F", shipFLength);
    this.newShipG = new Ship("Ship G", shipGLength);
    this.newShipH = new Ship("Ship H", shipHLength);
    this.newShipI = new Ship("Ship I", shipILength);
    this.newShipJ = new Ship("Ship J", shipJLength);

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipA,
      shipACords.letter,
      shipACords.number
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipB,
      shipBCords.letter,
      shipBCords.number
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipC,
      shipCCords.letter,
      shipCCords.number
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipD,
      shipDCords.letter,
      shipDCords.number
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipE,
      shipECords.letter,
      shipECords.number
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipF,
      shipFCords.letter,
      shipFCords.number
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipG,
      shipGCords.letter,
      shipGCords.number
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipH,
      shipHCords.letter,
      shipHCords.number
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipI,
      shipICords.letter,
      shipICords.number
    );

    this.newPlayersHumanAndAi.humanPlayerInitialPlacement(
      this.newShipJ,
      shipJCords.letter,
      shipJCords.number
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

        else{
            elements[rowOfHumanGameBoard][i].textContent =null;
            \
        }
      }
    }
  }

  updateGameStatusOnDisplay(Status) {
    const gameStatusDisplay = document.querySelector("#gameStatusDisplay");
    gameStatusDisplay.textContent = Status;
  }
}
