import OptionsScene from '../Scenes/OptionsScene';

jest.mock('../Scenes/OptionsScene');

test('Testing the Options menu Scene', () => {
  expect(new OptionsScene()).toBeInstanceOf(OptionsScene);
});