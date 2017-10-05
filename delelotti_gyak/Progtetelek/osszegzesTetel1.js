'use strict';
//Határozzuk meg N darab szám átlagát!

function osszegzesTetel1(){
    let tomb = [1, 2, 3, 4, 5, 5, 8];
    let avg = 0;
    let ossz = 0;
    for (let i = 0; i < tomb.length; i++){
        ossz += tomb[i];
    }
    avg = ossz / tomb.length;
    console.log('A szamok atlaga: ', avg);
}

module.exports = {
    result: osszegzesTetel1
};