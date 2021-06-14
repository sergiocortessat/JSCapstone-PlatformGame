import LeaderBoardScene from '../Scenes/LeaderBoardScene';

jest.mock('../Scenes/LeaderBoardScene');

test('Testing the Game Over Scene', () => {
  expect(new LeaderBoardScene()).toBeInstanceOf(LeaderBoardScene);
});