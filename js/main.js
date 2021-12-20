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
    // rotate 
    box.rotation.y = BABYLON.Tools.ToRadians(45);
    // create mesh
    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10},scene);
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
    // create sounds
    //const sound = new BABYLON.Sound("sound", "url to sound file", scene);
    //Leave time for the sound file to load before playing it
    //sound.play();

    const animationBox = new BABYLON.Animation("wheelAnimation", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    const wheelKeys = []; 
    //At the animation key 0, the value of rotation.y is 0
    wheelKeys.push({
        frame: 0,
        value: 0
    });

    //At the animation key 30, (after 1 sec since animation fps = 30) the value of rotation.y is 2PI for a complete rotation
    wheelKeys.push({
        frame: 30,
        value: 2 * Math.PI
    });
    //Link this animation to a wheel
    box.animations = [];
    box.animations.push(animationBox);

    

    //set the keys
    animationBox.setKeys(wheelKeys);
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
    scene.beginAnimation(box, 0, 30, true);
    return scene;
    
}

//create scene
const scene = createScene();

engine.runRenderLoop(()=>{
    scene.render();
    
});


// get a canvas
const canvas = document.getElementById("canvas");
// create BabylonJs engine
const engine = new BABYLON.Engine(canvas, true);

var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2,  Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    camera.inputs.attached.mousewheel.detachControl(canvas);

    var dome = new BABYLON.PhotoDome(
        "testdome",
        "./textures/360photo.jpeg",
        {
            resolution: 32,
            size: 1000
        },
        scene
    );

    return scene;
};

//create scene
const scene = createScene();

engine.runRenderLoop(()=>{
    scene.render();
    
});