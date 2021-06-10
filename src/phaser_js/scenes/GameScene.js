import Phaser from 'phaser';
import logo from '../../../assets/phaser_assets/logo.png';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    // load images
    this.load.image('logo', '../../../assets/phaser_assets/logo.png');
  }

  create() {
    this.add.image(400, 300, 'logo');
  }
}
