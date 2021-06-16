import PreloaderScene from '../Scenes/PreloaderScene';

jest.mock('../Scenes/PreloaderScene');
describe('It testes the Preloader Scene', () => {
  test('Testing the Preloader Scene', () => {
    expect(new PreloaderScene()).toBeInstanceOf(PreloaderScene);
  });

  test('Testing the Preloader Scene does belong only to it object instance', () => {
    expect(new (PreloaderScene)()).not.toBe(typeof Function);
  });
});