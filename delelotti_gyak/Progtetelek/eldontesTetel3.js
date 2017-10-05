'use strict';

/* Nyilvántartjuk a Savaria expresszre kiadott helyjegyeket.
Van-e még szabad hely az expresszen? (Az expresszen most –az egyszerűség kedvéért–1-től N-ig sorszámozottak a helyek. */

const randomGenerator = require('./randomGenerator');

function eldontesTetel3(){
    let x;
    let i;
    let j;
    let n = 10;
    let szabadHelyek = [];
    let kiadottHelyek = [];
    for(i = 1; i < n+1; i++){
        szabadHelyek.push(i);
    }

    for(i = 0; i<szabadHelyek.length; i++) {
        x = randomGenerator.randomGenerator(1,10);
        for(j = 0; j<=n; j++){
            if(x == szabadHelyek[j]) {
                kiadottHelyek.push(szabadHelyek[j]);
                szabadHelyek.splice(j, 1);
            }
        }
    }
    console.log('szabad helyek :', szabadHelyek);
    console.log('kiadott helyek :', kiadottHelyek);
}

module.exports = {
    result: eldontesTetel3
};