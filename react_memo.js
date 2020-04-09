// state
import { useState } from "react";

const [ state, setState ] = useState("default value"); // équivalent à : let state = "default value"

// envoi de formulaire
const handleSubmit = (event) => {
    event.preventDefault(); // empêche l'envoi d'une requête

    // l'action à effectuer lors de l'envoi du formulaire
}

// changement d'un state via formulaire
// -- DANS LA PARTIE FONCTIONNELLE (EN HAUT)
const handleChange = (event) => {

    switch (event.target.name) {
        case "state":
            setState(event.target.value);
            break;
        // no default
    }
}

// OU EN ES6
const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
        case "state":
            setState(value);
            break;
        // no default
    }
}

// -- DANS LE RETURN
<input
    type="text"
    name="state" // équivalent au name dans le switch
    onChange={handleChange}
    value={state} // équivalent au nom du state
/>