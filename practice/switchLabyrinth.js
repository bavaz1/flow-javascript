'use strict';
/**
 * Adott a következő táblázat:
 * 
 * |0|1|2|
 * |3|4|5|
 * |6|7|8|
 * 
 * Írjatok programot, ami a '4' pontról 2 lépést tesz és megmondja, melyik számon áll.
 * Írja ki számmal és betűvel is.
 * Egy lépés értékkészlete a következő lehet: up, down, left, right.
 * Ha olyan pontot érünk, ami a táblázaton kívül esik, írjon ki a program X-et.
 * A feladatot a switch statement segítségével oldjátok meg.
 * Ha tudnátok se használjatok máshol tanult megoldásokat.
 * Javaslom, hogy előbb rajzoljatok papíron. Pont mint az ősember.
 * Továbbá egy tipp: Kommentben írhattok a switch-ek fölé megjegyzést magatoknak.
 * Jó munkát!
 */

let step01 = 'up';
let step02 = 'left';
let number;
let texturalNumber;
let outOfField = 'X';

console.log('Most a 4-es mezőn állsz. Van két lépésed.');

switch (step01) {
case 'up':
    number = 1;
    console.log('Most a(z) ', number, ' mezőn állsz. Van még egy lépésed.');
    switch (step02) {
    case 'up':
        console.log('Most a(z) ', outOfField, ' mezőn állsz. Elhagytad a mátrixot. Vesztettél.');
        break;
    case 'down':
        number = 4;
        console.log('Most a(z) ', number, ' mezőn állsz. Vége a játéknak.');
        break;
    case 'left':
        number = 0;
        console.log('Most a(z) ', number, ' mezőn állsz. Vége a játéknak.');
        break;
    case 'right':
        number = 2;
        console.log('Most a(z) ', number, ' mezőn állsz. Vége a játéknak.');
        break;
    default:
        console.log('Érvénytelen lépés.');
    }
    break;
case 'down':
    number = 7;
    console.log('Most a(z) ', number, ' mezőn állsz. Van még egy lépésed.');
    switch (step02) {
    case 'up':
        number = 4;
        console.log('Most a(z) ', number, ' mezőn állsz. Vége a játéknak.');
        break;
    case 'down':
        console.log('Most a(z) ', outOfField, ' mezőn állsz. Elhagytad a mátrixot. Vesztettél.');
        break;
    case 'left':
        number = 6;
        console.log('Most a(z) ', number, ' mezőn állsz. Vége a játéknak.');
        break;
    case 'right':
        number = 8;
        console.log('Most a(z) ', number, ' mezőn állsz. Vége a játéknak.');
        break;
    default:
        console.log('Érvénytelen lépés.');
    }
    break;
case 'left':
    number = 3;
    console.log('Most a(z) ', number, ' mezőn állsz. Van még egy lépésed.');
    switch (step02) {
    case 'up':
        number = 0;
        console.log('Most a(z) ', number, ' mezőn állsz. Vége a játéknak.');
        break;
    case 'down':
        number = 6;
        console.log('Most a(z) ', number, ' mezőn állsz. Vége a játéknak.');
        break;
    case 'left':
        console.log('Most a(z) ', outOfField, ' mezőn állsz. Elhagytad a mátrixot. Vesztettél.');
        break;
    case 'right':
        number = 4;
        console.log('Most a(z) ', number, ' mezőn állsz. Vége a játéknak.');
        break;
    default:
        console.log('Érvénytelen lépés.');
    }
    break;
case 'right':
    number = 5;
    console.log('Most a(z) ', number, ' mezőn állsz. Van még egy lépésed.');
    switch (step02) {
    case 'up':
        number = 2;
        console.log('Most a(z) ', number, ' mezőn állsz. Vége a játéknak.');
        break;
    case 'down':
        number = 8;
        console.log('Most a(z) ', number, ' mezőn állsz. Vége a játéknak.');
        break;
    case 'left':
        number = 4;
        console.log('Most a(z) ', number, ' mezőn állsz. Vége a játéknak.');
        break;
    case 'right':
        console.log('Most a(z) ', outOfField, ' mezőn állsz. Elhagytad a mátrixot. Vesztettél.');
        break;
    default:
        console.log('Érvénytelen lépés.');
    }
    break;
default:
    console.log('Érvénytelen lépés.');
}
// MAGIC HELYE

//console.log(number, texturalNumber);
