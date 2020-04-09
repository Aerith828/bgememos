const myObject = {
    key1: "value",
    key2: "value",
    key3: "value",
    etc:  "...",
}

// COMMON JS
// const key1 = myObject.key1;
// const blabla = myObject.key2;

// ES6
const {
    key1,              // récupération de "key1"
    key2: blabla,      // récupération de "key2" et renommer en "blabla"
    key6 = 'default',  // récupération de "key6" et initialisation si elle contient "undefined"
    ...rest            // objet contenant les clés non récupérées (ici "key3", "etc")
} = myObject;

// =============================================

const myArray = [
    "value1", // index 0
    "value2", // index 1
    "value3", // index 2
    "value4", // index 3
    "value5", // index 4
]

// COMMON JS
// const index0 = myArray[0];

// ES6
const [ index0, index1, untruc, ...rest2 ] = myArray;

// POUR LES PLUS MARTEAUX D'ENTRE NOUS

let a = "world";
let b = "hello";

[ a, b ] = [ b, a ];

console.log(a, b);