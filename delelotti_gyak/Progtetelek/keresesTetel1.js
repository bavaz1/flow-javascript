'use strict';

/* Nyelvvizsgán  a  nyelvtani  tesztek  pontszámait  (0..maxP,  maxP>0)  ülési sorrendben jegyezték föl.
Keressünk olyan vizsgázót, aki ugyanannyi  pontot kapott, mint valamelyik szomszédja! */

const randomGenerator = require('./randomGenerator');

function keresesTetel1() {
    let maxPont = 2;
    let nevsor = [
        {
            nev: 'Laci',
            pontszam: 0
        },
        {
            nev: 'Eva',
            pontszam: 0
        },
        {
            nev: 'Miki',
            pontszam: 0
        },
        {
            nev: 'Peti',
            pontszam: 0
        },
        {
            nev: 'Jozsi',
            pontszam: 0
        },
        {
            nev: 'Ivett',
            pontszam: 0
        }
    ];

    for (let i = 0; i < nevsor.length; i++){
        nevsor[i].pontszam = randomGenerator.randomGenerator(0,maxPont);
    }
    console.log(nevsor);
    for (let i = 0; i < nevsor.length; i++){
        if (i === nevsor.length-1) {
            break;
        } else if (nevsor[i].pontszam == nevsor[i+1].pontszam){
            console.log(nevsor[i].nev + ' és ' + nevsor[i+1].nev + ' egyenlő pontszámot ért el.');
        }
    }
}

module.exports = {
    result: keresesTetel1
};