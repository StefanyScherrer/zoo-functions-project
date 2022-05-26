const data = require('../data/zoo_data');

// function getAnimalMap(options) {
//   // seu código aqui
// }
const species = (animal) => !animal || !animal.includeNames;

const sexSieve = (residents, animal) =>
  residents.filter(({ sex: residentSex }) => animal.sex === residentSex);

const getResidentNames = (animal, residents, specieName) => {
  const filteredResidents = animal.sex ? sexSieve(residents, animal) : residents;
  let residentNames = [...filteredResidents.map((resident) => resident.name)];
  residentNames = animal.sorted ? residentNames.sort() : residentNames;
  const result = {};
  result[specieName] = residentNames;
  return result;
};

const getAnimalByLocation = (animal) =>
  data.species.reduce((acc, { location, name: specieName, residents }) => {
    acc[location] = acc[location] || [];

    const specieInfo = species(animal)
      ? specieName
      : getResidentNames(animal, residents, specieName);

    acc[location].push(specieInfo);

    return acc;
  }, {});

function getAnimalMap(animal) {
  const animalMap = getAnimalByLocation(animal);
  return animalMap;
}
getAnimalMap({ includeNames: true, sorted: true });

module.exports = getAnimalMap;
