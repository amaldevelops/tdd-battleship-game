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
        this.newShipA = new Ship("Ship A", 1);
        // console.log(this.newPlayersInstance.humanPlayer());
        this.humanPlayerShipsInitialPlacement();

        this.newPlayersInstance.humanPlayerInitialPlacement(
          this.newShipA,
          "B",
          1
        );
        console.log(
          this.newPlayersInstance.humanPlayerBoardStatus()["board"]["B"]
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
    const HumanA0 = document.querySelector("#humanA0");

    for (let i = 0; i < 10; i++) {
      document.querySelector("#humanA" + i).textContent =
        this.newShipA.shipStatus().shipName;
      document.querySelector("#humanB" + i).textContent =
        this.newPlayersInstance.humanPlayerBoardStatus()["board"]["B"][i];
      document.querySelector("#humanC" + i).textContent = "Yo Matey";
      document.querySelector("#humanD" + i).textContent = "Yo Matey";
      document.querySelector("#humanE" + i).textContent = "Yo Matey";
      document.querySelector("#humanF" + i).textContent = "Yo Matey";
      document.querySelector("#humanG" + i).textContent = "Yo Matey";
      document.querySelector("#humanH" + i).textContent = "Yo Matey";
      document.querySelector("#humanI" + i).textContent = "Yo Matey";
      document.querySelector("#humanJ" + i).textContent = "Yo Matey";
    }

    HumanA0.textContent = "Yo Matey";
  }

  updateGameStatusOnDisplay(Status) {
    const gameStatusDisplay = document.querySelector("#gameStatusDisplay");
    gameStatusDisplay.textContent = Status;
  }
}
