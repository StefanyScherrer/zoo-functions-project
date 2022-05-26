const data = require('../data/zoo_data');

// function countEntrants(entrants) {
//   // seu código aqui
// }

// function calculateEntry(entrants) {
// }
function stageOfLife(age) {
  let stage1 = 'child';
  if (age >= 50) stage1 = 'senior';
  if (age >= 18 && age < 50) stage1 = 'adult';
  return stage1;
}
function countEntrants(entrants) {
  const accumulator = entrants.reduce((acc, { age }) => {
    const stage2 = stageOfLife(age);
    acc[stage2] = acc[stage2] || 0;
    acc[stage2] += 1;
    return acc;
  }, {});
  return accumulator;
}

function integralValue(total) {
  const { prices } = data;
  return Object.keys(total).reduce((acc, age) => {
    const paid = total[age];
    const price = prices[age];
    const result = paid * price;
    return acc + result;
  }, 0);
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const allEntrants = countEntrants(entrants);
  const result = integralValue(allEntrants);
  return result;
}

module.exports = { calculateEntry, countEntrants };
