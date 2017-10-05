'use strict';

//Adott  egy  hőmérsékletsorozat.  Állapítsuk  meg, hogy szigorúan  monoton növekvő-e!

const randomGenerator = require('./randomGenerator');

function eldontesTetel1(){
    let i;
    let homerseklet = [];
    for(i = 0; i < 3; i++){
        homerseklet.push(randomGenerator.randomGenerator(10, 25));
    }
    i = 0;
    while(homerseklet[i] < homerseklet[i+1] || i < homerseklet.length){
        if(homerseklet[i] >= homerseklet[i+1]){
            console.log('A hőmérsékletsorozat NEM szigorúan monoton növekvő!');
            break;
        }
        if(i == homerseklet.length-1) {
            console.log('A hőmérsékletsorozat szigorúan monoton növekvő!');
        }
        i++;
    }
}

module.exports = {
    result: eldontesTetel1
};