import './assets/style/style.css';
import Phaser from 'phaser';
import showMessage from './message';
import sky from './assets/images/sky.png';

const gameConfig = {
  width: 800,
  height: 400,
  scene: sky,
};

new Phaser.Game(gameConfig);
