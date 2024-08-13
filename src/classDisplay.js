import { Ship } from "./classShip";
import { Gameboard } from "./classGameBoard";
import { Player } from "./classPlayers";

export class Display {
  constructor() {
    this.isHumanTurn = true;
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  convertCords(inputArray) {
    const inputString = inputArray[0];
    const letter = inputString[0];
    const number = parseInt(inputString.substring(2));

    return { letter, number };
  }

  startGame() {
    this.emptySpace = {
      shipName: "EMPTY",
      shipLength: "XXXX",
      numberOfHits: "XXXX",
      shipSunk: "XXXX",
    };
    const startGameButton = document.querySelector("#startGameButton");

    document.addEventListener("DOMContentLoaded", () => {
      startGameButton.addEventListener("click", () => {
        this.newPlayersHumanAndAi = new Player();
        this.humanPlayerShipsInitialPlacement();
        this.newPlayersHumanAndAi.aiPlayerInitialRandomShipPlacement();
        this.aiPlayerRenderBoardToDisplay();
        this.updateGameStatusOnDisplay("Yayy Game Started!");
        this.humanPlayerAiBoardClicks();

        this.resetGame();

        this.gameLogic();
      });
    });
  }

  resetGame() {
    const resetGameButton = document.querySelector("#resetGameButton");
    resetGameButton.addEventListener("click", () => {
      window.location.reload();
    });
  }

  gameLogic() {
    if (this.isHumanTurn) {
      this.humanPlayerGamePlay();
      this.humanPlayerRenderBoardToDisplay();
    } else if (!this.isHumanTurn) {
      this.aiPlayerGamePlay();
      this.humanPlayerRenderBoardToDisplay();
      this.isHumanTurn = true;
    }

    // Check for game over conditions
    if (this.newPlayersHumanAndAi.humanPlayerGameBoard.allShipsHealth() === 0) {
      this.updateGameStatusOnDisplay("Computer Won !");
    } else if (
      this.newPlayersHumanAndAi.aiPlayerGameBoard.allShipsHealth() === 0
    ) {
      this.updateGameStatusOnDisplay("Human Won !");
    }
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

  humanPlayerAiBoardClicks() {
    let aiPlayerGameBoardTable = document.getElementById(
      "aiPlayerGameBoardTable"
    );
    aiPlayerGameBoardTable.addEventListener("click", (playerClicks) => {
      const target = playerClicks.target;

      if (target.tagName === "TD") {
        // Handle the click event for the table data cell

        let converted = [target.id.substring(8)];
        let attackedCoordinates = this.convertCords(converted);

        this.currentBoardAttackCoordinates =
          this.newPlayersHumanAndAi.aiPlayerCurrentGameBoard()[
            attackedCoordinates.letter
          ][attackedCoordinates.number];

        if (this.currentBoardAttackCoordinates === null) {
          this.newPlayersHumanAndAi.aiPlayerCurrentGameBoard()[
            attackedCoordinates.letter
          ][attackedCoordinates.number] = this.emptySpace;
          document.getElementById(target.id).classList.add("missedAttacks");
        } else if (this.currentBoardAttackCoordinates === this.emptySpace) {
          this.updateGameStatusOnDisplay("Location already clicked");
        } else {
          this.newPlayersHumanAndAi
            .aiPlayerCurrentGameBoard()
            [attackedCoordinates.letter][attackedCoordinates.number].hit();
          document.getElementById(target.id).classList.add("successfulAttacks");
        }

        this.aiPlayerRenderBoardToDisplay();
        this.updateGameStatusOnDisplay();
      }
    });
  }
  humanPlayerGamePlay() {
    let aiPlayerGameBoardTable = document.getElementById(
      "aiPlayerGameBoardTable"
    );

    aiPlayerGameBoardTable.addEventListener("click", (event) => {
      const target = event.target;

      if (target.tagName === "TD") {
        this.isHumanTurn = false;
        this.gameLogic();
      }
    });
  }

  aiPlayerGamePlay() {
    const boardRows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let randomColumnCords = this.getRndInteger(0, 9);
    let randomRowCords = this.getRndInteger(0, 10);

    this.currentBoardAttackCoordinates =
      this.newPlayersHumanAndAi.humanPlayerCurrentGameBoard()[
        boardRows[randomRowCords]
      ][randomColumnCords];

    if (this.currentBoardAttackCoordinates === null) {
      this.newPlayersHumanAndAi.humanPlayerCurrentGameBoard()[
        boardRows[randomRowCords]
      ][randomColumnCords] = this.emptySpace;
    } else if (this.currentBoardAttackCoordinates === this.emptySpace) {
      this.updateGameStatusOnDisplay("Location already clicked");
    } else {
      this.newPlayersHumanAndAi
        .humanPlayerCurrentGameBoard()
        [boardRows[randomRowCords]][randomColumnCords].hit();
    }

    this.updateGameStatusOnDisplay();
  }

  humanPlayerRenderBoardToDisplay() {
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
          this.newPlayersHumanAndAi.humanPlayerCurrentGameBoard()[
            rowOfHumanGameBoard
          ][i];

        if (
          humanPlayerGameBoardCells !== null &&
          humanPlayerGameBoardCells !== this.emptySpace
        ) {
          elements[rowOfHumanGameBoard][i].textContent =
            humanPlayerGameBoardCells.shipName +
            " " +
            "Length:" +
            humanPlayerGameBoardCells.shipLength +
            " Hits:" +
            humanPlayerGameBoardCells.numberOfHits +
            " Sunk:" +
            humanPlayerGameBoardCells.shipSunk;

          document
            .querySelector(`#human${rowOfHumanGameBoard}${i}`)
            .classList.add("shipsNotSunk");
          if (humanPlayerGameBoardCells.shipSunk === true) {
            console.log("Ship is Sunk");
            document
              .querySelector(`#human${rowOfHumanGameBoard}${i}`)
              .classList.add("successfulAttacks");
          }
        } else if (humanPlayerGameBoardCells === this.emptySpace) {
          document
            .querySelector(`#human${rowOfHumanGameBoard}${i}`)
            .classList.add("emptySpace");
        } else {
          elements[rowOfHumanGameBoard][i].textContent = null;
        }
      }
    }
  }

  aiPlayerRenderBoardToDisplay() {
    const boardRows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const elements = [];

    // Cache DOM elements for efficiency
    for (const boardRowNum of boardRows) {
      elements[boardRowNum] = [];
      for (let i = 0; i < 10; i++) {
        elements[boardRowNum][i] = document.querySelector(
          `#software${boardRowNum}-${i}`
        );
      }
    }

    for (const rowOfAiGameBoard of boardRows) {
      for (let i = 0; i < 10; i++) {
        const aiPlayerGameBoardCells =
          this.newPlayersHumanAndAi.aiPlayerCurrentGameBoard()[
            rowOfAiGameBoard
          ][i];

        if (
          aiPlayerGameBoardCells !== null &&
          aiPlayerGameBoardCells !== this.emptySpace &&
          aiPlayerGameBoardCells.shipSunk === true
        ) {
          elements[rowOfAiGameBoard][i].textContent =
            aiPlayerGameBoardCells.shipName +
            " " +
            "Length:" +
            aiPlayerGameBoardCells.shipLength +
            " Hits:" +
            aiPlayerGameBoardCells.numberOfHits +
            " Sunk:" +
            aiPlayerGameBoardCells.shipSunk;
        } else {
          elements[rowOfAiGameBoard][i].textContent = null;
        }
      }
    }
  }

  updateGameStatusOnDisplay(Status) {
    const gameStatusDisplay = document.querySelector("#gameStatusDisplay");
    const humanPlayerTotalShips = document.querySelector(
      "#humanPlayerTotalShips"
    );
    const humanPlayerSunkShips = document.querySelector(
      "#humanPlayerSunkShips"
    );
    const aIPlayerTotalShips = document.querySelector("#aIPlayerTotalShips");
    const AiPlayerSunkShips = document.querySelector("#AiPlayerSunkShips");
    gameStatusDisplay.textContent = Status;
    humanPlayerTotalShips.textContent =
      "Human Player Total Ship Fleet at start :" + 10;
    humanPlayerSunkShips.textContent =
      "Human Player currently remaining Ships: " +
      this.newPlayersHumanAndAi.humanPlayerGameBoard.allShipsHealth();
    aIPlayerTotalShips.textContent =
      "Ai Player Total Ship Fleet at start: " + 10;
    AiPlayerSunkShips.textContent =
      "Ai currently remaining Ships: " +
      this.newPlayersHumanAndAi.aiPlayerGameBoard.allShipsHealth();
  }
}
