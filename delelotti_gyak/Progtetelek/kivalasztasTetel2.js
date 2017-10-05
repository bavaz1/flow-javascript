'use strict';

/* Írjon programot, amely egy adott névsorban megmondja,
hogy Kiss Pista hányadik sorszámú! */

function kivalasztasTetel2() {
    let i = 0;
    let keresett = 'Kiss Pista';
    let nevsor = ['Nagy Sandor', 'Varga Benedek', 'Kovacs Erno', 'Kiss Pista', 'Eros Arnold'];
    while(i < nevsor.length){
        if(nevsor[i] === keresett){
            console.log(keresett, ' a nevsorban a ', i+1 + '. helyen van.');
            break;
        }
        i++;
    }
}

module.exports = {
    result: kivalasztasTetel2
};