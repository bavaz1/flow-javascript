'use strict';

//Készítsünk programot, amely egy hónapnévvel megadott dátumot átalakít hónapszámmal megadott dátummá!

function kivalasztasTetel3(){
    let keresett = [2017, 'december', 5];
    let honapok = ['januar', 'februar', 'macrius', 'aprilis', 'majus', 'junius',
                   'julius', 'augusztus', 'szeptember', 'oktober', 'november', 'december'];
    for(let i = 0; i < honapok.length; i++){
        if(keresett[1] === honapok[i]){
            console.log('Az eredeti datum: ', keresett[0] + '.', keresett[1] + '.', keresett[2] + '.');
            console.log('Az atalakitott datum: ', keresett[0] + '.', i+1 + '.', keresett[2] + '.');
        }
    }
}

module.exports = {
    result: kivalasztasTetel3
};