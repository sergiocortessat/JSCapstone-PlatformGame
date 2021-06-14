import GameOverScene from '../Scenes/GameOverScene';

jest.mock('../Scenes/GameOverScene');

test('Testing the Game Over Scene', () => {
  expect(new GameOverScene()).toBeInstanceOf(GameOverScene);
});