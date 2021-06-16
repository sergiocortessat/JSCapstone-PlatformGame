import GameScene from '../Scenes/GameScene';

jest.mock('../Scenes/GameScene');

describe('It testes the main Game Scene', () => {
  test('Testing the main Game Scene', () => {
    expect(new GameScene()).toBeInstanceOf(GameScene);
  });
  test('Testing the main Game Scene does belong only to it object instance', () => {
    expect(new (GameScene)()).not.toBe(typeof Function);
  });
});