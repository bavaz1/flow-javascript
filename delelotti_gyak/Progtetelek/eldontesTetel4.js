'use strict';

//Ismert N autó fogyasztása. (100 km-ként fogyasztott literben mérve). Döntsük el,
//hogy minden autó 10 liter alatt fogyasztott-e!

function eldontesTetel4(){
    let autokFogyasztasa = [6, 8, 7, 6, 10, 9, 7];
    let i = 0;

    while(i < autokFogyasztasa.length && autokFogyasztasa[i] < 10){
        i++;
    }

    if (i === autokFogyasztasa.length){
        console.log('Minden auto 10 liter alatt fogyaszt 100km-en.');
    } else {
        console.log('NEM minden auto fogyaszt 10 liter alatt 100km-en.');
    }
}

module.exports = {
    result: eldontesTetel4
};