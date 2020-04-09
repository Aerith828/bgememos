// SI... SINON
if (numberVariable === "3.14") {
    console.log("c'est vrai !");
} else {
    console.log("c'est faux !");
}

// SI... SINON SI... SINON SI... SINON...
if (numberVariable === "zeiufh") {
    console.log("condition 1 est vraie");
} else if (strVariable === "erhufue") {
    console.log("condition 1 est fausse, mais condition 2 est vrai");
} else {
    console.log("toutes les conditions sont fausses.");
}

// SI... SINON SI... SINON... (Forme alternative)
switch(numberVariable) {
    case "str1": // if (numberVariable === "str1") {
        console.log("condition 1 est vraie");
        break;
    case "eiurhfieh": // } else if (numberVariable === "eiurhfieh") {
        console.log("la condition 1 est fausse, mais  la 2 est vraie");
        break;
    default: // } else {
        console.log("toutes les conditions sont fausses");
        break;
}

// TANT QUE
while (numberVariable === 3.24) {
    console.log("c'est encore vrai");
}

// TANT QUE avec test après la première execution
do {
    console.log("c'est la première fois, ou c'est encore vrai");
} while (numberVariable === 3.24);

// POUR .... VARIANT DE ... A ... EN PAS DE ...
for (let i = 0; i < 100; i++) {
    console.log(i);
}