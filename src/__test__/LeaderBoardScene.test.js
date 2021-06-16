import LeaderBoardScene from '../Scenes/LeaderBoardScene';

jest.mock('../Scenes/LeaderBoardScene');

describe('It testes the Leader Board Scene', () => {
  test('Testing the LeaderBoard table Scene', () => {
    expect(new LeaderBoardScene()).toBeInstanceOf(LeaderBoardScene);
  });
  test('Testing the main LeaderBoard Scene does belong only to it object instance', () => {
    expect(new (LeaderBoardScene)()).not.toBe(typeof Function);
  });
});