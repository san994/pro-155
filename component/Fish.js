AFRAME.registerComponent("fish",{
    init:function(){
     for(var i=1;i<=20;i++){
        var id = `fish${i}`;
        
        var posx = Math.floor(Math.random()*100+(-50));
        var posy = Math.floor(Math.random()*20+(-10));
        var posz = Math.floor(Math.random()*60+(-40));

        var position = {x:posx,y:posy,z:posz};
        this.flyingbirds(id,position)
     }
    },
    flyingbirds:(id,position)=>{
      var terrainEl = document.querySelector("#island-model")
      var birdEl = document.createElement("a-entity")
     
      birdEl.setAttribute("id",id)
      birdEl.setAttribute("position",position)
      birdEl.setAttribute("gltf-model","./assets/fish/scene.gltf")
      birdEl.setAttribute("static-body",{
        shape:"sphere",
        sphereRadius:5
      });
      birdEl.setAttribute("game-play",{
        elementId:`#${id}`
    })


      birdEl.setAttribute("animation-mixer",{})
      terrainEl.appendChild(birdEl)
    }
})