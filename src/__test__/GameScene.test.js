import GameScene from '../Scenes/GameScene';

jest.mock('../Scenes/GameScene');

test('Testing the Game Over Scene', () => {
  expect(new GameScene()).toBeInstanceOf(GameScene);
});