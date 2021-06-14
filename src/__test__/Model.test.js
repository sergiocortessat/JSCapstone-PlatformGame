import { test } from '@jest/globals';
import Model from '../Model';

describe('It testes Model phaser script', () => {

  test('Test that background music does not paly immediately at the game starting', () => {
    const mockModel = new (Model)();
    expect(mockModel.bgMusicPlaying).toBeFalsy();
  });

  test('Test Music to be enabled to accepts music', () => {
    const mockModel = new (Model)();
    expect(mockModel.bgMusicPlaying).toBeFalsy();
  });

  test('Test Sound to be enabled to accepts music', () => {
    const mockModel = new (Model)();
    expect(mockModel.bgMusicPlaying).toBeFalsy();
  });

  test('Turning on the background music', () => {
    const musicModelObj = new Model();
    expect(musicModelObj.bgMusicPlaying).toEqual(false);
  });
});