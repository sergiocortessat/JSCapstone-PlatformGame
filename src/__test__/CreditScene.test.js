import CreditsScene from '../Scenes/CreditsScene';

jest.mock('../Scenes/CreditsScene');

beforeEach(() => {
  CreditsScene.mockClear();
});

describe('It testes the Credit Scene', () => {
  test('Testing Credit Scenes', () => {
    expect(new (CreditsScene)()).toBeInstanceOf(CreditsScene);
  });

  test('Testing Credit Scenes Testing does belong only to it object instance', () => {
    expect(new (CreditsScene)()).not.toBe(typeof Function);
  });
});