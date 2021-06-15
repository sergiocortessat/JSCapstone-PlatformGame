import Phaser from 'phaser';
import { showScore } from '../modules/data';
import { gameConfig } from '../Config/config';
import board from '../modules/scoreBoardPushDom';

export default class leaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  preload() {
    this.load.html('leaderBoard', 'assets/board.html');
  }

  create() {
    const self = this;

    // this.add.text(gameConfig.width / 2.55, 55, 'Leader Board', { color: 'white', fontSize: '32px ' });

    // const element = this.add.dom(640, 180).createFromCache('leaderBoard');

    this.add.text(gameConfig.width / 2.30, 55, 'Leader Board', { color: 'white', fontSize: '32px ' });

    const element = this.add.dom(680, 180).createFromCache('leaderBoard');

    element.setPerspective(800);

    element.addListener('click');

    element.on('click', (event) => {
      if (event.target.name === 'loginButton') {
        self.scene.start('Title');
      }
    });

    showScore().then((item) => {
      const scores = item.result.sort((a, b) => ((a.score > b.score) ? -1 : 1));
      board(scores);
    });
  }
}