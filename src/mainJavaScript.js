//This is the main JavaScript file

//ES Module Imports
//Following will import the CSS file used to style the project
import "./mainStyleSheet.css";

import { Display } from "./classDisplay";
import { Ship } from "./classShip";
import { Gameboard } from "./classGameBoard";
import { Player } from "./classPlayers";

const gameInitialization = new Display();

gameInitialization.startGame();

//ES Module Exports
export { Ship, Gameboard, Player }; //Class exports
// export { gameBoardHuman, gameBoardAi }; //Class instance exports
