import GameOverScene from '../Scenes/GameOverScene';

jest.mock('../Scenes/GameOverScene');

describe('It testes the Game Over Scene', () => {
  test('Testing the Game Over Scene', () => {
    expect(new GameOverScene()).toBeInstanceOf(GameOverScene);
  });

  test('Testing the Game Over Scene does belong only to it object instance', () => {
    expect(new (GameOverScene)()).not.toBe(typeof Function);
  });
});