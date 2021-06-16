import BootScene from '../Scenes/BootScene';

jest.mock('../Scenes/BootScene');

beforeEach(() => {
  BootScene.mockClear();
});

describe('It testes the Boot Scene', () => {
  test('Testing Boot Scene', () => {
    expect(new BootScene()).toBeInstanceOf(BootScene);
  });

  test('Testing Credit Scenes', () => {
    expect(new (BootScene)()).not.toBe(typeof Function);
  });
});