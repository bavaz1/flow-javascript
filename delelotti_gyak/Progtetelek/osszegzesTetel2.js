'use strict';

//Határozzuk meg K darab egész szám négyzetének összegét, és szorzatát!

function osszegzesTetel2() {
    let tomb = [1, 2, 3, 4];
    let negyzetOsszeg = 0;
    let szorzat = 1;
    for (let i = 0; i < tomb.length; i++){
        negyzetOsszeg += tomb[i]*tomb[i];
        szorzat *= tomb[i];
    }
    console.log('A negyzetosszeguk: ', negyzetOsszeg);
    console.log('A szorzatuk: ', szorzat);
}

module.exports = {
    result: osszegzesTetel2
};