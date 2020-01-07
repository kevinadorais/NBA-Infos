splash.prototype = {

    loadScripts: function () {
    },
  
    loadBgm: function () {
    },
  
    loadImages: function () {
    },
  
    loadFonts: function () {
    },
  
    // The preload function then will call all of the previously defined functions:
    preload: function () {
        game.add.sprite(0, 0, 'loadFont');
        var loadBar = game.add.sprite(game.world.centerX, 400, "loadBar");
        var status = game.add.text(game.world.centerX, 380, 'Loading...', {fill: 'white'});
        this.load.setPreloadSprite(loadBar);

      this.loadScripts();
      this.loadImages();
      this.loadFonts();
      this.loadBgm();
    },
  