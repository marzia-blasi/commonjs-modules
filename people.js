/*
3 - people.js
Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.*/

const person = require("./names");
const activities = require("./hobbies");

function people() {
  return {
    fullName: person("bruce", "wayne"),
    hobbies: activities("golf", "leggere", "finanza"),
  };
}

console.log(people());
