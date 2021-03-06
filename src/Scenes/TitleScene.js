import Phaser from 'phaser';
import { gameConfig } from '../Config/config';
import Button from '../Objects/Button';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    // Game
    this.gameButton = new Button(this, gameConfig.width / 2, gameConfig.height / 2 - 150, 'blueButton1', 'blueButton2', 'Play', 'Game');

    // Options
    this.optionsButton = new Button(this, gameConfig.width / 2, gameConfig.height / 2 - 50, 'blueButton1', 'blueButton2', 'Options', 'Options');

    // Credits
    this.creditsButton = new Button(this, gameConfig.width / 2, gameConfig.height / 2 + 50, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    // LeadBoard
    this.leadboardButton = new Button(this, gameConfig.width / 2, gameConfig.height / 2 + 150, 'blueButton1', 'blueButton2', 'Lead Board', 'LeaderBoard');

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.8, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(gameConfig.width / 2,
        gameConfig.height / 2 - offset * 100,
        gameConfig.width, gameConfig.height),
    );
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      this.gameText,
      gameButton,
    );
  }
}
