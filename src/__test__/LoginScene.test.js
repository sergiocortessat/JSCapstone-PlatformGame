import LoginScene from '../Scenes/LoginScene';

jest.mock('../Scenes/LoginScene');

test('Testing the Log in name Scene', () => {
  expect(new LoginScene()).toBeInstanceOf(LoginScene);
});