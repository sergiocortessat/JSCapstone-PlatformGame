import './style/style.css';
import Phaser from 'phaser';
import config from './phaser_js/config/config';
import GameScene from './phaser_js/scenes/GameScene';
import BootScene from './phaser_js/scenes/BootScene';
import PreloaderScene from './phaser_js/scenes/PreloaderScene';
import TitleScene from './phaser_js/scenes/TitleScene';
import OptionsScene from './phaser_js/scenes/OptionsScene';
import CreditsScene from './phaser_js/scenes/CreditsScene';
 
class Game extends Phaser.Game {
  constructor () {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Game');
  }
}
 
window.game = new Game();