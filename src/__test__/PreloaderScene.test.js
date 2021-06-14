import PreloaderScene from '../Scenes/PreloaderScene';

jest.mock('../Scenes/PreloaderScene');

test('Testing the Game Over Scene', () => {
  expect(new PreloaderScene()).toBeInstanceOf(PreloaderScene);
});