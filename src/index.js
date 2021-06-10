import './style/style.css';
import Phaser from 'phaser';
import config from './phaser_js/config/config';
import GameScene from './phaser_js/scenes/GameScene';
import BootScene from './phaser_js/scenes/BootScene';
import PreloaderScene from './phaser_js/scenes/PreloaderScene';
import TitleScene from './phaser_js/scenes/TitleScene';
import OptionsScene from './phaser_js/scenes/OptionsScene';
import CreditsScene from './phaser_js/scenes/CreditsScene';
import Model from './Model';
import InputScene from './phaser_js/scenes/InputScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Input', InputScene.InputScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();