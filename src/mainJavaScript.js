//This is the main JavaScript file

//ES Module Imports
//Following will import the CSS file used to style the project
import "./mainStyleSheet.css";

import { Ship } from "./classShip";
import { Gameboard } from "./classGameBoard";
import {Player} from "./classPlayers";

const ShipA=new Ship("ShipA",1);
const ShipB=new Ship("ShipB",2);
const ShipC=new Ship("ShipC",4);
const ShipD=new Ship("ShipD",1);
const ShipE=new Ship("ShipE",1);
const ShipF=new Ship("ShipF",1);
const ShipG=new Ship("ShipG",2);
const ShipH=new Ship("ShipH",3);
const ShipI=new Ship("ShipI",1);
const ShipJ=new Ship("ShipJ",4);


//ES Module Exports
export { Ship, Gameboard, Player }; //Class exports
export {ShipA,ShipB,ShipC,ShipD,ShipE,ShipF,ShipG,ShipH,ShipI,ShipJ} //Class instance exports

