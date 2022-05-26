const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = data.employees.find((e) => e.id === id);
  const animal = data.species.find((specie) => specie.id === employee.responsibleFor[0]);
  console.log(animal);
  animal.residents.sort((a, b) => b.age - a.age);
  const { name, sex, age } = animal.residents[0];
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
