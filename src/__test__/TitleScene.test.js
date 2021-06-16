import TitleScene from '../Scenes/TitleScene';

jest.mock('../Scenes/TitleScene');

describe('It testes the Title Scene', () => {
  test('Testing the Game Over Scene', () => {
    expect(new TitleScene()).toBeInstanceOf(TitleScene);
  });

  test('Testing the title Scene does belong only to it object instance', () => {
    expect(new (TitleScene)()).not.toBe(typeof Function);
  });
});