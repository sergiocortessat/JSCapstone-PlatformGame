import TitleScene from '../Scenes/TitleScene';

jest.mock('../Scenes/TitleScene');

test('Testing the Game Over Scene', () => {
  expect(new TitleScene()).toBeInstanceOf(TitleScene);
});