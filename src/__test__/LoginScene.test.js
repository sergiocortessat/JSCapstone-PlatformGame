import LoginScene from '../Scenes/LoginScene';

jest.mock('../Scenes/LoginScene');

test('Testing the Game Over Scene', () => {
  expect(new LoginScene()).toBeInstanceOf(LoginScene);
});