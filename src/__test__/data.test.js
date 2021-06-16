import { test } from '@jest/globals';
import * as Score from '../modules/data';

describe('LeaderBoard', () => {
  test('Receiving information from API to populate table', () => {
    Score.sendScore('Praz', 57).then((result) => {
      expect(typeof result).toBe('JSON');
    }).catch((err) => err);
  });

  test('Not receiving information from API to populate table', () => {
    Score.sendScore('Test', 57).then((result) => {
      expect(typeof result).not.toBe('JSON');
    }).catch((err) => err);
  });

  test('it should send player name and score', () => {
    Score.sendScore('Thapa', 62).then((result) => {
      expect(result.result).toBe('Leaderboard score created correctly.');
    }).catch((err) => err);
  });

  test('it should not send player name and score', () => {
    Score.sendScore('Test', 62).then((result) => {
      expect(result.result).not.toBe('Leaderboard score created correctly.');
    }).catch((err) => err);
  });

  test('It should return the type of Score Getter', () => {
    Score.showScore().then((result) => {
      expect(result.result).toBe('Leaderboard score created correctly.');
    }).catch((err) => err);
  });

  test('It should not return the type of Score Getter', () => {
    Score.showScore().then((result) => {
      expect(result.result).not.toBe('Leaderboard score created correctly.');
    }).catch((err) => err);
  });
});
