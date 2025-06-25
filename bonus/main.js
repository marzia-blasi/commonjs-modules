const person = require("../names");
const activities = require("../hobbies");

console.log(person("davide", "rosso"));

console.log(activities("leggere", "mangiare", "giocare"));

function people(name, hobby) {
  return {
    fullName: name,
    hobbies: hobby,
  };
}

console.log(
  people(person("bruce", "wayne"), activities("golf", "leggere", "finanza"))
);
