'use strict';

/* Adott  egy  szöveg.  Állapítsuk  meg,  hogy  több  mondatból  áll-e.
A  mondat végén az alábbi írásjelek lehetnek: „.”, „!”, „?”, és ezek csak itt fordulhatnak elő.
Továbbá  ha  követi  még  szöveg,  akkor  az  egyetlen  szóközzel és nagybetűvel kezdődik. */

function eldontesTetel2(){
    let szoveg = 'A harmadik feladat szoveges.';
    let i = 0;
    let answer;
    let sentence = 0;

    for(i = 0; i < szoveg.length; i++){
        if(szoveg.charAt(i) == '.' || szoveg.charAt(i) == '!' || szoveg.charAt(i) == '?'){
            if(szoveg.charAt(i+1) == ' '){
                if(szoveg.charAt(i+2) == szoveg.charAt(i+2).toUpperCase()){
                    answer = true;
                } else {
                    answer = false;
                    console.log('Nem nagybetűvel kezdted valamelyik új mondatodat, de több mondatod is van.');
                }
            } else {
                sentence++;
            }
        }
    }

    if(answer){
        console.log('Több mondatból áll a szöveg.');
    }
    if (sentence == 1) {
        console.log('Egy mondatod van.');
    }
}

module.exports = {
    result: eldontesTetel2
};