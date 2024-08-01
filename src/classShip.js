export { Ship };

class Ship {
  static shipIDCounter = 0;
  constructor(shipLength) {
    this.shipID = Ship.shipIDCounter++;
    this.shipLength = shipLength;
    this.numberOfHits = 0;
    this.shipSunk = false;
  }

  hit() {
    if (!this.shipSunk) {
      this.numberOfHits += 1;
    }
    if (this.numberOfHits >= this.shipLength) {
      this.shipSunk = true;
    }
  }

  isSunk() {
    return this.shipSunk;
  }

  shipStatus() {
    this.shipInfoObject = {
      shipLength: this.shipLength,
      numberOfHits: this.numberOfHits,
      shipSunk: this.shipSunk,
    };
    return this.shipInfoObject;
  }
}
