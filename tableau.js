const myArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// BOUCLE POUR FAIRE UN TRUC SUR CHAQUE ELEMENT D'UN TABLEAU

// ANCIEN
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// NOUVEAU
myArray.forEach((item) => {
    console.log(item);
});

// BOUCLE POUR OBTENIR UN TABLEAU A PARTIR DU PREMIER
const myDouble = myArray.map((item) => {
    return item * 2;
});