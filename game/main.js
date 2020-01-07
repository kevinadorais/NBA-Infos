var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game'), main = function () {};

main.prototype = {

  preload: function () {
    game.load.image('loadFont',    'assets/images/loadFont.jpg');
    game.load.image('loadBar',  'assets/images/loadBar.png');
    game.load.script('loadMenu',  'states/loadMenu.js');
  },

  create: function () {
    game.state.add('game/loadMenu.js', loadMenu);
    game.state.start('loadMenu');
  }

};

game.state.add('game/main.js', main);
game.state.start('main');