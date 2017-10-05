'use strict';

/* Hölgyek  és  urak  számára  párkereső  estet  szerveznek.  
Ismerjük  a meghívottak  névsorát,  és  nemét,  érkezési  idő  szerint  rendezve.  
Állapítsuk meg, melyik hölgy érkezett elsőként. */

function kivalasztasTetel1(){
    let nevsor = [
        {
            nev: 'Laci',
            nem: 'ferfi'
        },
        {
            nev: 'Eva',
            nem: 'no'
        },
        {
            nev: 'Miki',
            nem: 'ferfi'
        }

    ];

    for(let i = 0; i < nevsor.length; i++){
        if(nevsor[i].nem == 'no'){
            console.log('Ő az első nő aki megérkezett: ', nevsor[i].nev);
            break;
        }
    }
}

module.exports = {
    result: kivalasztasTetel1
};