'use strict';

//Írjunk programot, amely egy osztály nyilvántartásából megállapítja, hogy van-e év
//vesztes az osztályban!   ÉVVESZTES = AUGUSZTUS ÉS AZ AZ UTÁN SZÜLETETTEK

function eldontesTetel5(){
    let nyilvantartas = [
        {
            nev: 'Laci',
            szulHo: 3
        },
        {
            nev: 'Peti',
            szulHo: 5
        },
        {
            nev: 'Feri',
            szulHo: 8
        }
    ];
    let i = 0;

    while (i < nyilvantartas.length && nyilvantartas[i].szulHo < 8){
        i++;
    }
    if(i === nyilvantartas.length){
        console.log('Nincs évvesztes az osztályban.')
    } else {
        console.log('Van évvesztes az osztályban.')
    }
}

module.exports = {
    result: eldontesTetel5
};