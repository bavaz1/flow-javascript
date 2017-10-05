'use strict';

/**
 * almostPerfectLabyrinth
 */

/**
 * Adott a switchLabyrinth megoldása
 * 
 * 01. Ábrázold a lépéseidet egy steps nevű tömbben.
 */ 

let steps = ['right', 'down', 'left', 'right', 'up', 'down', 'down', 'right'];

/**
 * 02. Definiálj egy x és egy y változót 0 értékkel.
 */

let x = 0;
let y = 0;

/**
 * 03. Hozz létre egy hash-t possibleResults néven, aminek a kulcsai a számok, 
 *     az értéke pedig egy újabb hash, melynek két kulcsa van, 
 *     "en" és "hu", értékeik pedig a számok angolul és magyarul szövegesen. 
 */

let possibleResults = {
    0: {
        en: 'zero',
        hu: 'nulla'
    },
    1: {
        en: 'one',
        hu: 'egy'
    },
    2: {
        en: 'two',
        hu: 'ketto'
    },
    3: {
        en: 'three',
        hu: 'harom'
    },
    4: {
        en: 'four',
        hu: 'negy'
    },
    5: {
        en: 'five',
        hu: 'ot'
    },
    6: {
        en: 'six',
        hu: 'hat'
    },
    7: {
        en: 'seven',
        hu: 'het'
    },
    8: {
        en: 'eight',
        hu: 'nyolc'
    },
    9: {
        en: 'nine',
        hu: 'kilenc'
    },
    10: {
        en: 'ten',
        hu: 'tiz'
    },
    11: {
        en: 'eleven',
        hu: 'tizenegy'
    },
    12: {
        en: 'twelve',
        hu: 'tizenketto'
    },
    13: {
        en: 'thirteen',
        hu: 'tizenharom'
    },
    14: {
        en: 'fourteen',
        hu: 'tizennegy'
    },
    15: {
        en: 'fifteen',
        hu: 'tizenot'
    }
};

/**
 * 
 * 04. Definiálj egy result és egy formattedResult változót érték nélkül.
 */

let result;    //nemhasználom
let formattedResult;

/**
 * 05. Hozz létre egy matrixot matrix néven, mely a következőt ábrázolja:
 * 
 * | 0| 1| 2| 3|
 * | 4| 5| 6| 7|
 * | 8| 9|10|11|
 * |12|13|14|15|
 * return x,y;
 * A zérus a bal felső sarok legyen, az a 0,0 -s koordináta.
 * Ügyelj rá, először az X-et, majd az Y-t hívjuk: matrix[x][y].
 */

let matrix = [[0, 1, 2 ,3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];

console.log('Oooookey, szoval egy 4x4-es mátrixban vagy :');
for (let i = 0; i<matrix.length; i++){
    console.log('\t\t', matrix[i]);
}
console.log('Te most a(z) \t|', matrix[x][y], '|\t mezőről indulsz.')

/**

 * 06. Hozz létre egy függvényt, getResult néven.
 *     A függvény visszatérési értéke az adott koorinátán lévő szám kell hogy legyen.
 *     Figyelem! Ha érvénytelen X koordinátát adsz meg, undefined lesz az eredménye!
 *     Ezért kell egy IF, ami megállapítja, object-e a típusa a matrix[x] -nek.
 *     Ha nem, akkor a visszatérési értéknek "X" -nek kell lennie.
 *     Ha az Y-on van undefined, szintén "X" legyen a visszatérési érték.
 */

let fail = 'X';
function getResult(x, y) {
    if ( x > matrix.length-1) {
        return fail;
    } else if (y > matrix[x].length-1) {
        return fail;
    } else {
        return x, y;
    }
}

/**
 * 07. Írj függvényt processStep néven, ami megváltoztatja a koordinátákat a lépés szerint.
 *     Bemeneti paramétere a step, ami egy konkrét lépést kap majd értéknek.
 *     Ehhez kiváló egy switch, ami a step értéke alapján
 *     ad hozzá vagy vesz el az x vagy az y értékéből.
 */


function processStep(step) {
    switch (step) {
    case 'up':
        x--;
        break;
    case 'down':
        x++;
        break;
    case 'left':
        y--;
        break;
    case 'right':
        y++;
        break;
    }
}


/**
 * 08. Definiálj egy resultFormatter függvényt,
 *     ami abban az esetben, ha a result X akkor X-et ír ki,
 *     máskülönben a possibleResults hash-ből kinyerve a következő formát, pl:
 *     1-egy-one
 */

function resultFormatter() {
    if (getResult(x, y) == fail) {
        console.log('X, elhagytad a mátrixot.');
    } else {
        console.log('Erre a mezőre érkeztél: ', matrix[x][y] + ' -', possibleResults[matrix[x][y]]['hu'] + ' -', possibleResults[matrix[x][y]]['en']);
    }
}

/**
 * 09. Definiálj egy processSteps metódust, ami végigmegy a steps tömbön
 *     egy FOR ciklus segítségével. A ciklusmagban a steps i. elemével
 *     hívd meg a processStep() -et, majd a result-ba töltsd be a getResult()
 *     eredményét, ez után pedig a formattedResult-ba a resultFormatter eredményét.
 *     Végül console.log-old ki a formattedResult -ot.
 */

let i;
function processSteps() {
    for (i = 0; i <= steps.length-1; i++){
        processStep(steps[i]);
    }
    console.log('Lépéseid száma : ', i);
    console.log(steps);
    formattedResult = resultFormatter();
}

/**
 * 10. Hívd meg a processSteps függvényt.
 * 
 */

processSteps();

/*
 * 
 * Jó munkát!
 * 
 * u.i.: rajzoljatok mint az ősember a barlang falára!
 */