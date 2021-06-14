import LeaderBoardScene from '../Scenes/LeaderBoardScene';

jest.mock('../Scenes/LeaderBoardScene');

test('Testing the LeaderBoard table Scene', () => {
  expect(new LeaderBoardScene()).toBeInstanceOf(LeaderBoardScene);
});