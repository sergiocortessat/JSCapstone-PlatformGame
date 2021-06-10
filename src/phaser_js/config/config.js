import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  width: 1334,
  height: 750,
  parent: 'container',
  backgroundColor: 0x8D1444,
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
};