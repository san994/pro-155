AFRAME.registerComponent("coin",{
    init:function(){
        for(var i=1;i<=20;i++){
          var id = `coin${i}`;

          var posX = (Math.random()*100+(-50));
          var posY = (Math.random()*20+(10));
          var posZ = (Math.random()*60+(-40));

          var position = {x:posX,y:posY,z:posZ};
          this.createCoins(id,position)
        }
    },
    createCoins:function(id,position){
        var terrainEl = document.querySelector("#island-model");
        var coinEl = document.createElement("a-entity");

        coinEl.setAttribute("id",id);
        coinEl.setAttribute("position",position);
        coinEl.setAttribute("geometry",{
            primitive:"circle",
            radius:"0.5"
        })
        coinEl.setAttribute("static-body",{
            shape:"sphere",
            sphereRadius:2
        });
        coinEl.setAttribute("game-play",{
            elementId:`#${id}`
        })

        coinEl.setAttribute("material",{color:"yellow"})
        terrainEl.appendChild(coinEl);
    }
})