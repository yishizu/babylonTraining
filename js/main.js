
console.log("Hello world");

var canvas = document.getElementById("canvas");
var engine = new BABYLON.Engine(canvas, true);
var createScene = function(){
    var scene = new BABYLON.Scene(engine);
    scene.clearColor - new BABYLON.Color3.White();
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0,0,-10),scene);
    
}