const data = require('../data/zoo_data');

const days = Object.keys(data.hours);

// function getSchedule(scheduleTarget) {
//   // seu código aqui
// }
// Retorna o nome das espécies em exibição em um dia específico.
const getSpeciesByAvailability = (day) => data.species
  .filter(({ availability }) => availability.includes(day))
  .map(({ name }) => name);

const createDayDisplay = (hour, animals, day) => ({
  officeHour: hour,
  exhibition: typeof animals === 'function' ? animals(day) : animals,
});

const createDaysSchedule = (acc, day) => {
  acc[day] = acc[day] || {};
  const daySchedule = data.hours[day];
  const { open, close } = daySchedule;
  const scheduleObject = open && close
    ? createDayDisplay(`Open from ${open}am until ${close}pm`, getSpeciesByAvailability, day)
    : createDayDisplay('CLOSED', 'The zoo will be closed!');
  acc[day] = scheduleObject;
  return acc;
};

const getSpecieAvailability = (scheduleTarget) => data.species.find(({ name }) =>
  name === scheduleTarget).availability;

const checkAnimal = (scheduleTarget) => data.species.some(({ name }) => name === scheduleTarget);

const isDay = (scheduleTarget, singleDay) => {
  const noParameter = !scheduleTarget;
  const invalidParameter = !days.includes(scheduleTarget);
  const isAnimal = checkAnimal(scheduleTarget);
  return (noParameter || invalidParameter || singleDay) && !isAnimal;
};

function getDaySchedule(scheduleTarget, isSingleDay) {
  const dates = isSingleDay ? [scheduleTarget] : days;
  const schedule = dates.reduce(createDaysSchedule, {});
  return schedule;
}

function getAnimalSchedule(scheduleTarget) {
  const schedule = getSpecieAvailability(scheduleTarget);
  return schedule;
}

function getSchedule(scheduleTarget) {
  const isSingleDay = days.includes(scheduleTarget);
  const isDaySchedule = isDay(scheduleTarget, isSingleDay);

  const schedule = isDaySchedule
    ? getDaySchedule(scheduleTarget, isSingleDay)
    : getAnimalSchedule(scheduleTarget);

  return schedule;
}

module.exports = getSchedule;
