// import Data from '../modules/data';
// import Board from '../modules/scoreBoard';
// import { gameConfig } from '../Config/config';

// export default class LeaderBoard extends Phaser.Scene {
//   constructor() {
//     super('LeaderBoard');
//   }

//   preload() {
//     this.load.html('leaderBoard', 'assets/board.html');
//   }

//   create() {
//     const self = this;

//     this.add.text(gameConfig.width / 2.5, 55, 'Leader Board', { color: 'white', fontSize: '32px ' });

//     const element = this.add.dom(680, 250).createFromCache('leaderBoard');

//     element.setPerspective(800);

//     element.addListener('click');

//     element.on('click', (event) => {
//       if (event.target.name === 'loginButton') {
//         self.scene.start('Title');
//       }
//     });
//     Board.create();
//   }
// }

import Phaser from 'phaser';
import Button from '../Objects/Button';
import { showScore } from '../leaderBoard';
import { gameConfig } from '../Config/config';
import board from '../modules/scoreBoard';

export default class leaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  preload() {
    this.load.html('leaderBoard', 'assets/board.html');
  }

  create() {
    const self = this;

    this.add.text(gameConfig.width / 2.5, 55, 'Leader Board', { color: 'white', fontSize: '32px ' });

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