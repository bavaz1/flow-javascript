'use strict';

let a = 5;
let b = 8;
let c = 10;

let x = (a+b)>c && (c-a)==b;
let y = (a*c)/2 <= (13%c)*9;
let z = (b+c)>=18 == true;
let w = (a!=b) != false;
let q = (a*a*b) === (b*a*a);
let m = (a+5)/c+b > (c+b)/a+15;
let s = 'Sztringproba' == 'sztringproba';
let v = (c*10+a) < 106 || (a+b*c)+2*c;
let t = (c%a) == 0;


console.log(x);
console.log(y);
console.log(z);
console.log(w);
console.log(q);
console.log(m);
console.log(s);
console.log(v);
console.log(t);

console.log(''); // üres sor

let eredmeny;

if (x) {
    eredmeny = 'Ezt ugyem irja ki';
} else {
    eredmeny = 'Haha, engem irt ki';
}

console.log('Eredmeny: ', eredmeny);