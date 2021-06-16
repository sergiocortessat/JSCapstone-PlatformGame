import OptionsScene from '../Scenes/OptionsScene';

jest.mock('../Scenes/OptionsScene');

describe('It testes the Options Scene', () => {
  test('Testing the Options menu Scene', () => {
    expect(new OptionsScene()).toBeInstanceOf(OptionsScene);
  });

  test('Testing the OptionsScene does belong only to it object instance', () => {
    expect(new (OptionsScene)()).not.toBe(typeof Function);
  });
});