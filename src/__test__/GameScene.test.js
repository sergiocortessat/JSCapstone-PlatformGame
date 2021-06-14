import GameScene from '../Scenes/GameScene';

jest.mock('../Scenes/GameScene');

test('Testing the main Game Scene', () => {
  expect(new GameScene()).toBeInstanceOf(GameScene);
});