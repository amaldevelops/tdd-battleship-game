//This is the main JavaScript file

//ES Module Imports
//Following will import the CSS file used to style the project
import "./mainStyleSheet.css";

import { Ship } from "./classShip";
import { Gameboard } from "./classGameBoard";
import {Player} from "./classPlayers";

const ShipA=new Ship(1);

//ES Module Exports
export { Ship, Gameboard, Player }; //Class exports
export {ShipA} //Class instance exports

