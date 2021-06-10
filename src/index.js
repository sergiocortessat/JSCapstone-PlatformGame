import './style/style.css';
import 'phaser';
import config from './phaser_js/config/config';
import GameScene from './phaser_js/scenes/GameScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Game', GameScene);
    this.scene.start('Game');
  }
}

window.game = new Game();
