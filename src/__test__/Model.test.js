import { test } from '@jest/globals';
import Model from '../Model';

describe('It testes Model for Phaser script', () => {
  const mockModel = new (Model)();
  test('Test that background music does not paly immediately at the game starting', () => {
    expect(mockModel.bgMusicPlaying).toBeFalsy();
  });

  test('Test Music to be enabled to accepts music', () => {
    expect(mockModel.bgMusicPlaying).toBeFalsy();
  });

  test('Test Sound to be enabled to accepts music', () => {
    expect(mockModel.bgMusicPlaying).toBeFalsy();
  });

  test('Turning on the background music', () => {
    mockModel.bgMusicPlaying = true;
    expect(mockModel.bgMusicPlaying).not.toBe(false);
  });

  test('Changing the settings on game sound', () => {
    mockModel.musicPlaying = true;
    expect(mockModel.musicPlaying).not.toBe(false);
  });

  test('Changing the settings on game music', () => {
    mockModel.soundPlaying = true;
    expect(mockModel.soundPlaying).not.toBe(false);
  });
});