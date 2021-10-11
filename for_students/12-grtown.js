/*jshint esversion: 6 */
// @ts-check

/**
 * Graphics Town Framework - "Main" File
 *
 * This is the main file - it creates the world, populates it with
 * objects and behaviors, and starts things running
 *
 * The initial distributed version has a pretty empty world.
 * There are a few simple objects thrown in as examples.
 *
 * It is the students job to extend this by defining new object types
 * (in other files), then loading those files as modules, and using this
 * file to instantiate those objects in the world.
 */

import * as T from "../libs/CS559-Three/build/three.module.js";
import * as Loaders from "../libs/CS559-Framework/loaders.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { WorldUI } from "../libs/CS559-Framework/WorldUI.js";
import {FlatHouse, PyramidHip} from "./buildings.js";
import {Tree, Mountain, Snow} from "./natural.js";
import {GrAdvancedSwing, GrCarousel} from "./parkobjects.js";
import {CircularTrack, TrackCube, TrackCar } from "../examples/track.js";
import { Helicopter, Helipad } from "../examples/helicopter.js";
import {Boat, Train, Carriage, QuadCop} from "./vehicles.js";
//import { ShinySculpture } from "../examples/shinySculpture.js";
import * as SimpleObjects from "../libs/CS559-Framework/SimpleObjects.js";
//import {main} from "../examples/main.js";

/**m
 * The Graphics Town Main -
 * This builds up the world and makes it go...
 */

// make the world
let world = new GrWorld({
    width: 800,
    height: 600,
    groundplanesize: 20 // make the ground plane big enough for a world of stuff
});

let envBoxLoader = new T.CubeTextureLoader();
envBoxLoader.setPath('./images/sky/');
let texture = envBoxLoader.load([
    'right.png', 'left.png', 'top.png', 'front.png', 'back.png', 'bottom.png'
]);
world.scene.background = texture;


// put stuff into the world
// this calls the example code (that puts a lot of objects into the world)
// you can look at it for reference, but do not use it in your assignment
//main(world);

// while making your objects, be sure to identify some of them as "highlighted"

//mountain
let mountain = new Mountain({ x: -15, z: -13 });
world.add(mountain);

//house
let flatHouse = new FlatHouse({ x: -8, z: 10 });
world.add(flatHouse);

let pyramidHip = new PyramidHip({ x: -12, z: 10 });
world.add(pyramidHip);

//boat
let boat = new Boat({ x: 12, z: -13 });
world.add(boat);

//swing
let swing = new GrAdvancedSwing({x: -16, z: 10});
world.add(swing);

//carousel
let carousel = new GrCarousel({x: -2, z: 14});
world.add(carousel);

//trees
for (let i = -19; i < -8; i += 2) {
    world.add(new Tree({ x: i, z: -18 }));
    world.add(new Tree({ x: i+1, z: -16 }));
}

for (let i = -19; i < -12; i += 2) {
    world.add(new Tree({ x: i, z: -8 }));
    world.add(new Tree({ x: i+1, z: -10 }));
}

//snow
//let snow = new Snow();
//world.add(snow);

//train
let track = new CircularTrack();
world.add(track);

let train = new Train(track);
train.u = 0;
let carriage1 = new Carriage(track);
carriage1.u = -0.032;
let carriage2 = new Carriage(track);
carriage2.u = -0.065;
let carriage3 = new Carriage(track);
carriage3.u = -0.1;

world.add(train);
world.add(carriage1);
world.add(carriage2);
world.add(carriage3);

//bridge
let bridge = new Loaders.ObjGrObject({
    obj:"./assets/bridge.obj",
    mtl:"./assets/bridge.mtl",
    norm:4.0,
    x: 8,
    y: -1,
    z: 13,
    callback: function(obj) {
        obj.objects[0].children[0].children.forEach(c=>c.rotateX(-Math.PI/2));
        obj.objects[0].children[0].children.forEach(c=>c.rotateZ(-Math.PI/4));
      } 
  })
  world.add(bridge);

//quadcop
let quadcop = new QuadCop();
let t = 0;
quadcop.stepWorld = function(delta) { 
    t+=delta; 
    quadcop.wing_group2.rotateZ(0.003 * delta);
    quadcop.wing_group4.rotateZ(0.003 * delta);
    quadcop.wing_group5.rotateZ(0.003 * delta);
    quadcop.objects[0].position.x = 10*Math.sin(t/1000); 
    quadcop.objects[0].position.z = 10*Math.cos(t/1000);
    quadcop.objects[0].position.y = 10;
    quadcop.objects[0].lookAt(10*Math.sin(t/1000)+10*Math.cos(t/1000)/1000, 0, 10*Math.cos(t/1000)-10*Math.sin(t/1000)/1000);
    quadcop.objects[0].rotateX(-Math.PI/2);
  }
world.add(quadcop);

//helicopter
world.add(new Helipad(4, 0, -17));
world.add(new Helipad(0, 0, 0));
world.add(new Helipad(17, 0, 15));
let copter = new Helicopter();
world.add(copter);
copter.getPads(world.objects);

//car
let car = new Loaders.ObjGrObject({
    obj:"./assets/car.obj",
    mtl:"./assets/car.mtl",
    norm:3.0,
    x: -17,
    z: 17,
    callback: function(obj) {
      obj.objects[0].children[0].children.forEach(c=>c.rotateY(Math.PI/2));
    } 
  })
  world.add(car);

  let material = new T.MeshBasicMaterial ({envMap: texture})
  let sphere = new SimpleObjects.GrSphere({ x: 10, y: 3, size: 4, material: material})
  sphere.stepWorld = function(delta) { 
    sphere.objects[0].rotateY(delta/1000);
  }
  world.add(sphere);

  

///////////////////////////////////////////////////////////////
// because I did not store the objects I want to highlight in variables, I need to look them up by name
// This code is included since it might be useful if you want to highlight your objects here
function highlight(obName) {
    const toHighlight = world.objects.find(ob => ob.name === obName);
    if (toHighlight) {
        toHighlight.highlighted = true;
    } else {
        throw `no object named ${obName} for highlighting!`;
    }
}
// of course, the student should highlight their own objects, not these
highlight("Boat-0");
highlight("Carousel-0");
highlight("FlatHouse-0");
highlight("Helicopter-0");
highlight("Mountain-0");
highlight("PyramidHip-0");
highlight("QuadCop-0");
highlight("SimpleGroundPlane-1");
highlight("Sphere-0");
highlight("Swing-0");
highlight("Train-0");
highlight("Tree-7");
highlight("Objfile(./assets/bridge.obj)");

///////////////////////////////////////////////////////////////
// build and run the UI
// only after all the objects exist can we build the UI
// @ts-ignore       // we're sticking a new thing into the world
world.ui = new WorldUI(world);
// now make it go!
world.go();
