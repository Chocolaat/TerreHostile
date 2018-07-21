    require([
	    'jsiso/canvas/Control',
	    'jsiso/canvas/Input',
	    'jsiso/img/load',
	    'jsiso/json/load',
	    'jsiso/tile/Field',
	    'jsiso/pathfind/pathfind',
	    'jsiso/particles/EffectLoader',
	    'jsiso/particles/Emitter',
	    'jsiso/particles/Effect',
	    'jsiso/particles/Particle',
	    'jsiso/utils',
	    'requirejs/domReady!'
    ],
    function(CanvasControl, CanvasInput, imgLoader, jsonLoader, TileField) {

      // -- FPS --------------------------------
      window.requestAnimFrame = (function() {
        return window.requestAnimationFrame || 
        window.webkitRequestAnimationFrame  || 
        window.mozRequestAnimationFrame     || 
        window.oRequestAnimationFrame       ||  
        window.msRequestAnimationFrame      || 
        function(callback, element) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();
      // ---------------------------------------

      function launch() {

        jsonLoader(['../json/map.json', '../json/imageFiles.json']).then(function(jsonResponse) {
          imgLoader([{graphics: jsonResponse[1].ground}, {graphics: jsonResponse[1].players}]).then(function(imgResponse) {
            var game = new main(0, 0, 10, 10, imgResponse[1]);  // X & Y drawing position, and tile span to draw 
            
            game.init([{
              title: "Graphics",
              layout: jsonResponse[0].ground,
              graphics: imgResponse[0].files,
              graphicsDictionary: imgResponse[0].dictionary, 
              heightMap: {
                map: jsonResponse[0].height,
                offset: 0,
                heightTile: imgResponse[0].files["blank-block.png"],
              },
              tileHeight: 50,
              tileWidth: 100,
              shadow: {
                offset: 20, // Offset is the same height as the stack tile
                verticalColor: '(5, 5, 30, 0.4)',
                horizontalColor: '(6, 5, 50, 0.5)'
              }
            }]);
          });
        });
      }
      

      function main(x, y, xrange, yrange, objectImages) {
        self = this;
        var mapLayers = [];
        var balls = [];
        var rangeX = xrange;
        var rangeY = yrange;
        var context = CanvasControl.create("canavas", 1000, 600, {
          background: "#FFF",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }, "mapView");
        

      function ProjectileObject(x, y, tileHeight, tileWidth, img) {
        this.x = x;
        this.y = y;
        this.yD = 2;
        this.xD = 2;
        this.tileX = null;
        this.tileY = null;

        var pos = mapLayers[0].getXYCoords(this.x, this.y, false);

        this.tileX = pos.x;
        this.tileY = pos.y;

        this.getPos = function(){
          return {x: this.tileX, y: this.tileY}
        },

        this.draw = function(context){
            var pos = {};

            pos = mapLayers[0].getXYCoords(this.x + tileWidth/2, this.y + this.yD + tileHeight/2);
      
            if (mapLayers[0].getHeightMapTile(pos.x, pos.y) !== 1) {
              this.y += this.yD;
              this.tileX = pos.x;
              this.tileY = pos.y;
            }
            else {
              this.y -= this.yD + 1;
              this.yD *= -1
            }

            pos = mapLayers[0].getXYCoords(this.x + this.xD + tileWidth/2, this.y + tileHeight/2);

            if (mapLayers[0].getHeightMapTile(pos.x, pos.y) !== 1) {
              this.x += this.xD;
              this.tileX = pos.x;
              this.tileY = pos.y;
            } 
            else {
              this.x -= this.xD + 1;
              this.xD *= -1;
            }

            context.save();

            context.translate(this.x, this.y);

            context.drawImage(img, -(img.width/2 + tileWidth)/4, -(img.height/2) + (tileHeight/2), img.width/1.15, img.height/1.15);
            
            context.restore();
        };
      }


      function draw() {
        context.clearRect(0, 0, CanvasControl().width, CanvasControl().height);
        for (i = 0; i < 0 + rangeY; i++) {
          for (j = 0; j < 0 + rangeX; j++) {
            mapLayers[0].draw(i,j);
            balls.map(function(ball) {
              var pos = ball.getPos();
              if (pos.x === i && pos.y ===j) {
                ball.draw(context);
              }
            });     
          }
        }
        requestAnimFrame(draw);
      }

      return {
        init: function(layers) {
          for (var i = 0; i < 0 + layers.length; i++) {
            mapLayers[i] = new TileField(context, CanvasControl().height, CanvasControl().width);
            mapLayers[i].setup(layers[i]);
            mapLayers[i].align("h-center", CanvasControl().width, xrange, 0);
            mapLayers[i].align("v-center", CanvasControl().height, yrange, 0);
          };
          balls.push(new ProjectileObject(600, 380, 100, 50, objectImages.files["enemy2.png"]));
          balls.push(new ProjectileObject(770, 280, 100, 50, objectImages.files["enemy1.png"]));
          balls.push(new ProjectileObject(570, 180, 100, 50, objectImages.files["enemy3.png"]));
          draw();
        }
      }
    }

    launch();
  });