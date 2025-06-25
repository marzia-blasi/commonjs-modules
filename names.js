/* 1 - names.js
Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.
* */

function person(firstName, lastName) {
  return {
    nome: firstName,
    cognome: lastName,
  };
}

// console.log(person("marzia", "blasi"));

module.exports = person;
