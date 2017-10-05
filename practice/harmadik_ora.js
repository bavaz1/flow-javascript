'use strict';


switch('alma') {
case 'alma':
    console.log('Ez egy alma');
    break;
case 'korte':
    console.log('Ez egy korte');
    break;
default:
    console.log('Ez egy gyumolcs');
}

const konstans = 3.14;
console.log(konstans);


let jozsi = 35;


switch(true) {
case jozsi < 21:
    console.log('Józsi még ifjú');
    break;
case jozsi < 35:
    console.log('Józsi felnőtt');
    break;
case jozsi < 45:
    console.log('Józsi középkorú');
    break;
case jozsi < 60:
    console.log('Józsi már titkolja, hogy hány éves');
    break;
default:
    console.log('Józsi bácsi már idős');
}


let kedvencFilm = 'Dangal';


switch (kedvencFilm){
case 'Viharsziget': 
    console.log('Az egy nagyon jó film');
    break;
case 'Kingsman': 
    console.log('Most jött ki a második része, láttad már?');
    break;
case 'Kodjatszma': 
    console.log('Remek film, az nekem is nagyon tetszett');
    break;
default: console.log('Ezt a filmet még nem láttam');
}