const data = require('../data/zoo_data');

const countAllAnimals = () => {
  const { species } = data;
  const firstCount = species.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});
  return firstCount;
};

const selectedAnimalCount = (specie, gender) => {
  const currentSpecie = data.species.find(({ name }) => name === specie);
  const secondCount = gender
    ? currentSpecie.residents
      .filter(({ sex }) => sex === gender).length
    : currentSpecie.residents.length;
  return secondCount;
};

function countAnimals(animal) {
  // seu código aqui
  const thirdCount = animal ? selectedAnimalCount(animal.specie, animal.sex) : countAllAnimals();
  return thirdCount;
}

module.exports = countAnimals;
