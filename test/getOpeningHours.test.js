const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('caso receba turno inválidos, dispara erro com mensagem: "The abbreviation must be \'AM\' or \'PM\'"', () => {
    const closed = '08:30-AA';
    const error = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('Monday', closed)).toThrow(error);
  });
  it('ao receber "Monday" como dia, retorna a string: "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '08:30-AM')).toBe('The zoo is closed');
  });
  it('Ao receber os argumentos Tuesday e 09:00-AM deve retornar a string "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Ao receber os argumentos Wednesday e 09:00-AM deve retornar a string "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-AM')).toBe('The zoo is open');
  });
});
