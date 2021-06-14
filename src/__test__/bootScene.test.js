import BootScene from '../Scenes/BootScene';

jest.mock('../Scenes/BootScene');

beforeEach(() => {
  BootScene.mockClear();
});

test('Testing Boot Scene', () => {
  expect(new BootScene()).toBeInstanceOf(BootScene);
});