import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    const progress = this.add.graphics();

    this.load.on('progress', (value) => {
      progress.clear();
      progress.fillStyle(0xffffff, 1);
      progress.fillRect(0, 270, 800 * value, 60);
    });

    this.load.on('complete', () => {
      progress.destroy();
    });

    //  Now let's load a huge stack of files!

    this.load.image('../../../assets/pics/128x128');
    this.load.image('../../../assets/pics/advanced_wars_tank');
    this.load.image('../../../assets/pics/amiga-cursor');
    this.load.image('../../../assets/pics/aqua_ball');
    this.load.image('../../../assets/pics/arrow');
    this.load.image('../../../assets/pics/asteroids_ship');
    this.load.image('../../../assets/pics/asuna_by_vali233');
    this.load.image('../../../assets/pics/atari130xe');
    this.load.image('../../../assets/pics/atari400');
    this.load.image('../../../assets/pics/atari800');
    this.load.image('../../../assets/pics/atari800xl');
    this.load.image('../../../assets/pics/atari1200xl');
    this.load.image('../../../assets/pics/beball1');
    this.load.image('../../../assets/pics/bikkuriman');
    this.load.image('../../../assets/pics/block');
    this.load.image('../../../assets/pics/blue_ball');
    this.load.image('../../../assets/pics/bluebar');
    this.load.image('../../../assets/pics/bsquadron1');
    this.load.image('../../../assets/pics/bsquadron2');
    this.load.image('../../../assets/pics/bsquadron3');
    this.load.image('../../../assets/pics/budbrain_chick');
    this.load.image('../../../assets/pics/bullet');
    this.load.image('../../../assets/pics/bunny');
    this.load.image('../../../assets/pics/cakewalk');
    this.load.image('../../../assets/pics/car');
    this.load.image('../../../assets/pics/carrot');
    this.load.image('../../../assets/pics/centroid');
    this.load.image('../../../assets/pics/chain');
    this.load.image('../../../assets/pics/chick');
    this.load.image('../../../assets/pics/chunk');
    this.load.image('../../../assets/pics/clown');
    this.load.image('../../../assets/pics/coin');
    this.load.image('../../../assets/pics/cokecan');
    this.load.image('../../../assets/pics/columns-blue');
    this.load.image('../../../assets/pics/columns-orange');
    this.load.image('../../../assets/pics/columns-red');
    this.load.image('../../../assets/pics/copy-that-floppy');
    this.load.image('../../../assets/pics/crate');
    this.load.image('../../../assets/pics/crate32');
    this.load.image('../../../assets/pics/cursor-rotate');
    this.load.image('../../../assets/pics/darkwing_crazy');
    this.load.image('../../../assets/pics/diamond');
    this.load.image('../../../assets/pics/dude');
    this.load.image('../../../assets/pics/eggplant');
    this.load.image('../../../assets/pics/elephant');
    this.load.image('../../../assets/pics/enemy-bullet');
    this.load.image('../../../assets/pics/exocet_spaceman');
    this.load.image('../../../assets/pics/explosion');
    this.load.image('../../../assets/pics/eyes');
    this.load.image('../../../assets/pics/firstaid');
    this.load.image('../../../assets/pics/flectrum');
    this.load.image('../../../assets/pics/flectrum2');
    this.load.image('../../../assets/pics/fork');
    this.load.image('../../../assets/pics/fuji');
    this.load.image('../../../assets/pics/gem');
    this.load.image('../../../assets/pics/ghost');
    this.load.image('../../../assets/pics/green_ball');
    this.load.image('../../../assets/pics/healthbar');
    this.load.image('../../../assets/pics/helix');
    this.load.image('../../../assets/pics/hello');
    this.load.image('../../../assets/pics/hotdog');
    this.load.image('../../../assets/pics/ilkke');
    this.load.image('../../../assets/pics/interference_ball_48x48');
    this.load.image('../../../assets/pics/kirito_by_vali233');
    this.load.image('../../../assets/pics/lemming');
    this.load.image('../../../assets/pics/loop');
    this.load.image('../../../assets/pics/maggot');
    this.load.image('../../../assets/pics/master');
    this.load.image('../../../assets/pics/melon');
    this.load.image('../../../assets/pics/mine');
    this.load.image('../../../assets/pics/mouse_jim_sachs');
    this.load.image('../../../assets/pics/mushroom');
    this.load.image('../../../assets/pics/onion');
    this.load.image('../../../assets/pics/orange-cat1');
    this.load.image('../../../assets/pics/orange-cat2');
    this.load.image('../../../assets/pics/orb-blue');
    this.load.image('../../../assets/pics/orb-green');
    this.load.image('../../../assets/pics/orb-red');
    this.load.image('../../../assets/pics/oz_pov_melting_disk');
    this.load.image('../../../assets/pics/palm-tree-left');
    this.load.image('../../../assets/pics/palm-tree-right');
    this.load.image('../../../assets/pics/pangball');
    this.load.image('../../../assets/pics/parsec');
    this.load.image('../../../assets/pics/pepper');
    this.load.image('../../../assets/pics/phaser');
    this.load.image('../../../assets/pics/phaser-dude');
    this.load.image('../../../assets/pics/phaser-ship');
    this.load.image('../../../assets/pics/phaser_tiny');
    this.load.image('../../../assets/pics/phaser1');
    this.load.image('../../../assets/pics/phaser2');
    this.load.image('../../../assets/pics/pineapple');
    this.load.image('../../../assets/pics/plane');
    this.load.image('../../../assets/pics/platform');
    this.load.image('../../../assets/pics/player');
    this.load.image('../../../assets/pics/purple_ball');
    this.load.image('../../../assets/pics/ra_dont_crack_under_pressure');
    this.load.image('../../../assets/pics/rain');
    this.load.image('../../../assets/pics/red_ball');
    this.load.image('../../../assets/pics/rgblaser');
    this.load.image('../../../assets/pics/saw');
    this.load.image('../../../assets/pics/shinyball');
    this.load.image('../../../assets/pics/ship');
    this.load.image('../../../assets/pics/shmup-baddie');
    this.load.image('../../../assets/pics/shmup-baddie-bullet');
    this.load.image('../../../assets/pics/shmup-baddie2');
    this.load.image('../../../assets/pics/shmup-baddie3');
    this.load.image('../../../assets/pics/shmup-boom');
    this.load.image('../../../assets/pics/shmup-bullet');
    this.load.image('../../../assets/pics/shmup-ship');
    this.load.image('../../../assets/pics/shmup-ship2');
    this.load.image('../../../assets/pics/skull');
    this.load.image('../../../assets/pics/slime');
    this.load.image('../../../assets/pics/slimeeyes');
    this.load.image('../../../assets/pics/snowflake-pixel');
    this.load.image('../../../assets/pics/sonic');
    this.load.image('../../../assets/pics/sonic_havok_sanity');
    this.load.image('../../../assets/pics/space-baddie');
    this.load.image('../../../assets/pics/spaceman');
    this.load.image('../../../assets/pics/spikedball');
    this.load.image('../../../assets/pics/spinObj_01');
    this.load.image('../../../assets/pics/spinObj_02');
    this.load.image('../../../assets/pics/spinObj_03');
    this.load.image('../../../assets/pics/spinObj_04');
    this.load.image('../../../assets/pics/spinObj_05');
    this.load.image('../../../assets/pics/spinObj_06');
    this.load.image('../../../assets/pics/spinObj_07');
    this.load.image('../../../assets/pics/spinObj_08');
    this.load.image('../../../assets/pics/splat');
    this.load.image('../../../assets/pics/steelbox');
    this.load.image('../../../assets/pics/tetrisblock1');
    this.load.image('../../../assets/pics/tetrisblock2');
    this.load.image('../../../assets/pics/tetrisblock3');
    this.load.image('../../../assets/pics/thrust_ship');
    this.load.image('../../../assets/pics/tinycar');
    this.load.image('../../../assets/pics/tomato');
    this.load.image('../../../assets/pics/treasure_trap');
    this.load.image('../../../assets/pics/ufo');
    this.load.image('../../../assets/pics/wabbit');
    this.load.image('../../../assets/pics/wasp');
    this.load.image('../../../assets/pics/wizball');
    this.load.image('../../../assets/pics/x2kship');
    this.load.image('../../../assets/pics/xenon2_bomb');
    this.load.image('../../../assets/pics/xenon2_ship');
    this.load.image('../../../assets/pics/yellow_ball');
    this.load.image('../../../assets/pics/zelda-hearts');
    this.load.image('../../../assets/pics/zelda-life');
  }

  create() {
    const keys = this.textures.getTextureKeys();

    for (let i = 0; i < keys.length; i++) {
      const x = Phaser.Math.Between(0, 800);
      const y = Phaser.Math.Between(0, 600);

      this.add.image(x, y, keys[i]);
    }
  }
}