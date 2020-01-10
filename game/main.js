var config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 600,
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('loadBar', 'assets/loadBar.png');
  this.load.image('backFont', 'assets/backFont.jpg');
  this.load.image('lebronJames', 'assets/lebronjames.png');
  this.load.image('kevinDurant', 'assets/kevindurant.png');
}

function create ()
{
  this.add.image(600, 300, 'loadFont');
}

function update ()
{
}