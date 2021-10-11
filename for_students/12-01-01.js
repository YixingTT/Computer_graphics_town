/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import * as SimpleObjects from "../libs/CS559-Framework/SimpleObjects.js";

let mydiv = document.getElementById("div1");

let world = new GrWorld({ width: mydiv ? 600 : 800, where: mydiv });

let envBoxLoader = new T.CubeTextureLoader();
envBoxLoader.setPath('./images/');
let texture = envBoxLoader.load([
    'right.png', 'left.png', 'top.png', 'front.png', 'back.png', 'bottom.png'
]);
world.scene.background = texture;

let bump = new T.TextureLoader().load("./images/map.JPG");
let material = new T.MeshBasicMaterial ({envMap: texture})
let matBump = new T.MeshStandardMaterial({envMap: texture, bumpMap: bump, color:'white', metalness:1.0, roughness:0});
world.add(new SimpleObjects.GrSphere({ x: -2, y: 1, material: material }));
world.add(new SimpleObjects.GrSphere({ x: 2, y: 1, material: matBump }));
world.go();
