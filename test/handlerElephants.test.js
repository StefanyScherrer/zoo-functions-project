const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se averageAge retorna um nº', () => {
    expect(typeof handlerElephants('averageAge')).toBe('number');
  });
  it('Verifica se param retorna um objeto', () => {
    expect(typeof handlerElephants('param')).toBe('object');
  });
  it('Verifica se elephants retorna um objeto', () => {
    expect(typeof handlerElephants('elephants')).toBe('object');
  });
  it('Teste se o argumento location deve retornar a string NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica se computeData retorna um objeto', () => {
    expect(typeof handlerElephants('computeData')).toBe('object');
  });
  it('Verifica se popularity retorna um nº', () => {
    expect(typeof handlerElephants('popularity')).toBe('number');
  });
  it('Verifica se retorna corretamente a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('Verifica se handlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Verifica se o argumento availability deve retornar um array de dias da semana que não contém Monday',
    () => {
      expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    });
});
