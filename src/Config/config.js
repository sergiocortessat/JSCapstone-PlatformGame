import Phaser from 'phaser';

const gameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1430,
  height: 680,
  dom: {
    createContainer: true,
  },
  physics: {
    // default: 'arcade',
    // arcade: { debug: true },
    default: 'arcade',
  },
  user: '',
};

const gameOptions = {
  platformSpeedRange: [300, 300],

  mountainSpeed: 80,

  spawnRange: [80, 300],

  platformSizeRange: [90, 300],

  platformHeightRange: [-5, 5],

  platformHeighScale: 20,

  platformVerticalLimit: [0.4, 0.8],

  playerGravity: 900,

  // jumpForce: 580,

  jumpForce: 450,

  playerStartPosition: 200,

  jumps: 2,

  coinPercent: 25,

  firePercent: 20,
};

export { gameConfig, gameOptions };
