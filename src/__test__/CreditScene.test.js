import CreditsScene from '../Scenes/CreditsScene';

jest.mock('../Scenes/CreditsScene');

beforeEach(() => {
  CreditsScene.mockClear();
});

test('Testing Credit Scenes', () => {
  expect(new (CreditsScene)()).toBeInstanceOf(CreditsScene);
});