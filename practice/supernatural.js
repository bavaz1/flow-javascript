#!/usr/bin/env nodejs
'use strict';


/**
 * SUPERNATURAL GYAKORLÓFELADAT
 * 
 * Sam és Dean Winchester egy vámpírtanya kiírtására készülnek Missouri állambeli Green Ridge külvárosában.
 * Bobby információi szerint 12 vámpír tanyázik az elhagyott pajtában, ebből 3 nő, egy pedig alfa.
 * Egy hím vámpírt 4 ezüstgolyó terít le. A nőket fele ennyi. Az alfát viszont a háromszora a normálisnak.
 * 
 * 
 * Samnek 3 tára van táranként 8 golyóval, Dean felkészültebb, 4 darab 10 töltényes tárral érkezett hentelni.
 * 
 * 
 * A megbeszéltek szerint Castiel a segítségükre siet, ha kifogynak a munícióból. Castiel egy angyal,
 * szinte halhatatlan, de egy kis esélye, 3%-a minden általa elpusztított vámpír esetén van, hogy megsérül.
 */

let sam_tar = 3;
let sam_toltenyei = 8;
let dean_tar = 4;
let dean_toltenyei = 10;
let sam_osszestolteny = (sam_tar*sam_toltenyei);
let dean_osszestolteny = (dean_tar*dean_toltenyei);
let novampir = 3;
let alfavampir = 1;
let osszesvampir = 12;
let himvampir = (osszesvampir-novampir-alfavampir);
let himvampir_hp = 4;
let novampir_hp = (himvampir_hp/2);
let alfavampir_hp = (himvampir_hp*4);
let deansWhiskyBullets = (dean_osszestolteny / 3) * 2;





/** 
 * A FELADAT
 * 
 * - Olvassátok el a segédletet. (a w3schools-osat mindenképp)
 * - Önálló munkában ismerkedjetek meg a ! (not) logikai operátort
 *   Ezt követően az osztás (/) és maradék képzés (%) aritmetikai operátorait próbáljátok ki.
 * - Vegyétek fel a számértékeket 1-1 beszédes nevű változóba.
 * - A kalkulálható számértékeket a változók felhasználásával
 *   és az alapvető aritmetikai operátorokkal (+,-,%,/) számoljátok ki és töltsétek újabb változókba.
 *   Aritmetikai műveleteket ahol csak lehet változókkal végezzetek!
 *   pl: let osszes tolteny = dean_toltenyei + sam_toltenyei
 * - A változók értékét szöveges formátumban írjátok ki console.log-gal.
 *   Több paraméter is megadható, amit egybefűz a log!
 * - A kérdésekre az IF statemant segítsével szövegesen válaszoljatok szintén a console.log felhasználásával.
 * - Azokat az ágakat is írjátok meg, amiről tudjátok, hogy nem fog lefutni.
 * - Használjatok egymásba ágyazott if-eket. Példa:
 **/

/* let x = true;
let y = false;

if (x) {
  if(y) {
    console.log('x.1 ág');
  } else {
    console.log('x.2 ág');
  }
} else {
  console.log('y ág');
} */
  
/**
 * KÉRDÉSEK
 * 
 * - Hány tölténye volt Deannek?
 * - Hány tölténye volt Samnek?
 * - Hány töltényük volt összesen?
 * - Hány töltény kell egy női vámpír kivégzéséhez?
 * - Hány töltény kell az alfához?
 * - Kinek volt több tölténye?
 * - Hány töltény szükséges az összes vámpír kivégzéséhez?
 * 
 * 
 * - Ha minden golyó betalál, Samnek hány tölténye marad az egy tárral maximálisan lelőhető vámpírok után?
 * - A kérdés ugyanez, csak Dean esetén
 * 
 * 
 * 
 * 
 * 
 * - Szükséges volt-e Castiel közbelépése?
 * - Mekkora esélye (%) volt Castielnek arra, hogy baja essen?
 * - Sam vagy Dean lőtt le több vámpírt, ha Deannek minden harmadik lövése félrement a sok wiskeytől?
 * - Ha Dean küldött a purgatóriumba több vámpírt, elérte-e a többlet a 10%-ot Dean-éhez képest?
 * - Ha megjelenik a csetepaté végén Crowley, a keresztúti démon, marad-e elég golyó a számára?
 *   5x annyi kell neki mint az alfának.
 * - Hány hete néz folyamatosan Supernatural-t Tasi, ha most tart az S8E18-nál
 *   és napi átlag 5 rész lecsúszik, de hétvégén 10 is.
 */

console.log(dean_toltenyei*dean_tar + ' tölténye volt Deannek');
console.log(sam_toltenyei*sam_tar + ' tölténye volt Samnek');
console.log((dean_toltenyei*dean_tar)+(sam_toltenyei*sam_tar) + ' töltényük volt összesen');
console.log('Egy női vámpír legyőzéséhez szükséges töltények száma: ' + himvampir_hp/2);
console.log('Egy alfa vámpír kivégzéséhez szükséges töltények száma: ' + himvampir_hp*3);

if (dean_osszestolteny > sam_osszestolteny) {
  console.log('Deannek volt több tölténye!');
} else if (dean_osszestolteny < sam_osszestolteny) {
  console.log('Samnek volt több tölténye!');
} else {
  console.log('Egyenlő töltényük volt!');
}

console.log('Az összes vámpír kivégzéséhez szükséges töltények száma: ', (himvampir*himvampir_hp)+(novampir*novampir_hp)+(alfavampir*alfavampir_hp));

console.log('Samnek', sam_toltenyei%himvampir_hp, 'tölténye marad');

console.log('Deannek', dean_toltenyei%himvampir_hp, 'tölténye marad');

if (deansWhiskyBullets > sam_osszestolteny){
  if ((deansWhiskyBullets % sam_osszestolteny) >= sam_osszestolteny * 0.1){
    console.log('Dean legalabb 10%al tobbet olt');
  } else {
    console.log('Dean tobbet olt, de nem 10%al');
  }
} else {
  console.log('Sam tobbet olt mint Dean');
}


/**
 * SEGÉDLET
 * 
 * Operátorok: https://www.w3schools.com/js/js_operators.asp
 * Aritmetikai műveletek: https://www.w3schools.com/js/js_arithmetic.asp
 * If statement: https://www.w3schools.com/js/js_if_else.asp
 * Supernatural: http://www.imdb.com/title/tt0460681/
 */ 