//This is the main JavaScript file

/*
Completed Tasks
* Code for Ai player to make random choices on the Human Players game board
* Code for game flow to hand over next turn to players
* Code to monitor sunk ships of each player and announce winner when remaining ships == 0
* Code to monitor Ai board in the console
* Code to update Ai Player board with Human player clicked spots and disabling anymore clicks on the same spot
* Code to show ai players sunk ships on the ai player board
* Code to color the gameboard according to sunk ships(Red), active ships (Green) and clicked spot (Blue), use CSS classes to do this
* CSS to make the game look nicer
*/

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
