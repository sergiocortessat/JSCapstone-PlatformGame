import LoginScene from '../Scenes/LoginScene';

jest.mock('../Scenes/LoginScene');
describe('It testes the Log in Scene', () => {
  test('Testing the Log in name Scene', () => {
    expect(new LoginScene()).toBeInstanceOf(LoginScene);
  });

  test('Testing the Log in Scene does belong only to it object instance', () => {
    expect(new (LoginScene)()).not.toBe(typeof Function);
  });
});