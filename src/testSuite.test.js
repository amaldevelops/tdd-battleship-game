import {ship} from './mainJavaScript';

const newShip=new ship(2,0,false);
const newShipReturnedObeject={shipLength:2,numberOfHits:0,
    shipSunk:true}



test('This test will check for Ship Class',()=>{
expect(newShip()).toBe(newShipReturnedObeject);

});