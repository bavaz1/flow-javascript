'use strict';

const random = require('./randomGenerator.js');

/* Egy kosárlabdacsapat nyilvántartása többek között tartalmazza a játékosok nevét
és magasságát. Írjunk programot, amely kiírja egy 210 cm-nél magasabb játékos nevét! */

function keresesTetel2(){
    let i = 0;
    let j = 0;
    let magasabbMint = 210;
    let magasabbIndexek = [];   // annak az indexe tárolódik itt, aki a csapatból a magasabbMint-nek eleget tesz
    let csapat = [
        {
            nev: 'Peti',
            magassag: 202
        },
        {
            nev: 'Jani',
            magassag: 222
        },
        {
            nev: 'Karcsi',
            magassag: 217
        },
        {
            nev: 'Feri',
            magassag: 192
        },
        {
            nev: 'Tomi',
            magassag: 211
        },
    ];

    while(i < csapat.length){
        if(csapat[i].magassag > magasabbMint){
            j++;
            magasabbIndexek.push(i);
        }
        i++;
    }

    let randomSzam = random.result(0, j-1);  // random számot generál a 0 és a feltételnek megfeleltek száma (j) között
    console.log(csapat[magasabbIndexek[randomSzam]].nev);
}

module.exports = {
    result: keresesTetel2
};