import Phaser from 'phaser';
// import logo from '../../assets/images/logo.png';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    // load images
    this.load.image('logo', 'assets/images/logo.png');
  }

  create() {
    this.add.image(400, 300, 'logo');
  }
}