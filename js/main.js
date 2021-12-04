///<reference path='./vendor/babylon.d.ts'/>
console.log("Hello world");

// get a canvas
const canvas = document.getElementById("canvas");
// create BabylonJs engine
const engine = new BABYLON.Engine(canvas, true);

//Create Scene Function
 function createScene(){
    // create scene
    const scene = new BABYLON.Scene(engine);
    // color
    scene.clearColor - new BABYLON.Color3.White();
    // create camera
    const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0,0,-10),scene);
    camera.attachControl(canvas,true);
    // create light
    const ligth = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0,1,0),scene);
    // create box
    const box = BABYLON.MeshBuilder.CreateBox("box", {size: 1}, scene);
    box.rotation.z = 3;
    box.rotation.x = 3;
    // create sphere
    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 1 ,segments:32}, scene);
    sphere.position = new BABYLON.Vector3(3,0,0);
    sphere.scaling = new BABYLON.Vector3(1,2,1);
    // create plane
    const plane = BABYLON.MeshBuilder.CreatePlane("plane", {size: 1}, scene);
    plane.position = new BABYLON.Vector3(-3,0,0);
    // create a line
    const points = [
        new BABYLON.Vector3(2,0,0),
        new BABYLON.Vector3(0,1,1),
        new BABYLON.Vector3(0,1,0),
    ];
    const lines = BABYLON.MeshBuilder.CreateLines("lines", {points}, scene);

    //create materials
    const material1 = new BABYLON.StandardMaterial('material', scene);
    material1.diffuseColor = new BABYLON.Color3(1,0,0);
    material1.emissiveColor = new BABYLON.Color3(0.5,0.5,0);
    box.material = material1;
    const material2 = new BABYLON.StandardMaterial('material2', scene);
    material2.diffuseColor = new BABYLON.Color3(1,0,1);
    sphere.material = material2;
    const material3 = new BABYLON.StandardMaterial('material3', scene);
    material3.diffuseTexture = new BABYLON.Texture('assets/image.png')
    plane.material = material3;


    return scene;
    
}

//create scene
const scene = createScene();

engine.runRenderLoop(()=>{
    scene.render();
});