export {Gameboard};

class Gameboard {
    constructor() {

      this.board = this.createBoard();
      
    }
  
    createBoard() {
      this.gameBoardSize = {
        X: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        Y: [null, null, null, null, null, null, null, null, null, null],
      };
      const newBoard = {};
      for (let i = 0; i < this.gameBoardSize.X.length; i++) {
        newBoard[this.gameBoardSize.X[i]] = [...this.gameBoardSize.Y];
      }
      return newBoard;
    }

    gameBoardStatus()
    {
      return this.board;
    }
  
    placeShips(ship, xStartCords, yStartCords) {
      this.ship = ship;
      this.xStartCords = xStartCords;
      this.yStartCords = yStartCords;
  
      if (
        this.board[this.xStartCords][this.yStartCords] === null &&
        this.board[this.xStartCords][this.yStartCords + this.ship.shipLength] ===
          null &&
        this.yStartCords + this.ship.shipLength < 9 &&
        this.yStartCords > 0
      ) {
        for (let i = 0; i < this.ship.shipLength; i++) {
          this.board[this.xStartCords][this.yStartCords + i] = this.ship;
        }
        return this.board;
      } else {
        return "Error location occupied or out of bounds";
      }
    }
  
    receiveAttack(xAttack, yAttack) {
      this.xAttack = xAttack;
      this.yAttack = yAttack;
  
      if (this.board[this.xAttack][this.yAttack] == null) {
        this.board[this.xAttack][this.yAttack] = "Hit";
      } else {
        this.shipAtLocation = this.board[this.xAttack][this.yAttack];
        this.shipAtLocation.hit();
      }
    }
  
    allShipsHealth() {
      this.shipCount = 10;
      // this.shipCount;
      let sunkShipCount = new Set();
  
      for (const row of Object.values(this.board)) {
        row.forEach((ship) => {
          if (ship && ship.shipSunk === true) {
            sunkShipCount.add(ship);
          }
        });
      }
  
      return this.shipCount - sunkShipCount.size;
    }

    
  }