//This is the main JavaScript file

//ES Module Imports
//Following will import the CSS file used to style the project
import "./mainStyleSheet.css";


class ship
{
    constructor(shipLength,numberOfHits,shipSunk)
    {
        this.shipInfoObject={shipLength:this.shipLength,
            numberOfHits:this.numberOfHits,
            shipSunk:this.shipSunk,

        }

    }
}


export {ship};
