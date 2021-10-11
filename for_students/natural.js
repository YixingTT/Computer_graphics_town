/*jshint esversion: 6 */

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";


// define your buildings here - remember, they need to be imported
// into the "main" program
let treeObCtr = 0;
export class Tree extends GrObject {
    constructor(params = {}) {
      let tree = new T.Group();
      let leaves1 = new T.ConeGeometry(0.3, 0.6, 30);
      leaves1.translate(0, 1.9, 0);
      let leaves2 = new T.ConeGeometry(0.4, 0.7, 30);
      leaves2.translate(0, 1.3, 0);
      let trunk = new T.CylinderGeometry(0.1, 0.1, 1, 30);
      trunk.translate(0, 0.5, 0);

      let leavesMaterial = new T.MeshStandardMaterial({ color: "green"});
      let mesh1 = new T.Mesh(leaves1, leavesMaterial);
      tree.add(mesh1);
      let mesh2 = new T.Mesh(leaves2, leavesMaterial);
      tree.add(mesh2);
      let trunkMaterial = new T.MeshStandardMaterial({ color: "brown"});
      let mesh3= new T.Mesh(trunk, trunkMaterial);
      tree.add(mesh3);
      super(`Tree-${treeObCtr++}`, tree);
      this.whole_ob = tree;
      
      // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    let scale = params.size ? Number(params.size) : 1;
    tree.scale.set(scale, scale, scale);
    }
}

let mountainObCtr = 0;
export class Mountain extends GrObject {
    constructor(params = {}) {
      let bump = new T.TextureLoader().load("./images/rock.jpeg");
      let mountainMat = new T.MeshStandardMaterial( { bumpMap: bump, color: 'grey', roughness:0.7});
      
      let mountain = new T.Group();
      let middleG = new T.ConeGeometry( 2, 4, 10 );
      middleG.translate(0, 2, 0);
      let middle = new T.Mesh(middleG, mountainMat);

      let leftG = new T.ConeGeometry( 1.5, 3, 10 );
      leftG.translate(-2, 1.5, 0);
      let left = new T.Mesh(leftG, mountainMat);

      let rightG = new T.ConeGeometry( 1.5, 3, 10 );
      rightG.translate(2, 1.5, 0);
      let right = new T.Mesh(rightG, mountainMat);

      mountain.add(middle);
      mountain.add(left);
      mountain.add(right);

      super(`Mountain-${mountainObCtr++}`, mountain);
      this.whole_ob = mountain;
      
      // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    let scale = params.size ? Number(params.size) : 1;
    mountain.scale.set(scale, scale, scale);
    }
}

let snowObCtr = 0;
export class Snow extends GrObject {
    constructor(params = {}) {
      //let snow = new T.Group();
      let snowParMat = new T.PointsMaterial({color: 'white', size: 2});
      let snowParG = new T.Geometry();

      for(let i = 0; i < 1000; i++){
        let x = Math.random()*100;
        let y = Math.random()*100;
        let z = Math.random()*100;
        snowPar.translate(x, y, z);
        snow.add(snowPar);
      }

      let snowPar = new T.Points(snowParG,snowParMat);
      super(`Snow-${snowObCtr++}`, snowPar);
      this.snowPar = snowPar;
    }

    stepWorld(delta, timeOfDay) {
      for (let i = 0; i < 1000; i++){
        //way1
        //let x = getWorldPosition(this.whole_ob[i])[1];
        //let y = getWorldPosition(this.whole_ob[i])[2];
        //if(y < -100){
          //this.whole_ob[i].translateY(Math.random()*100);
        //}
        //this.whole_ob[i].translateY(y - (10 * delta));
        //if(x < -100){
          //this.whole_ob[i].translateX(Math.random()*100);
        //}
        //this.whole_ob[i].translateX(x - (10 * 2 * delta));

        //Way2
        //if(this.objects[i].position[2] < -100){
          //this.objects[i].position[2]  = Math.random()*100;
        //}
        //this.objects[i].position.y  = this.whole_ob[i].position.y  - (10 * delta);
        //if (this.whole_ob[i].position.x < -100) {
          //this.whole_ob[i].position.x = Math.random() * 100;
        //}
        //this.whole_ob[i].position.x = this.whole_ob[i].position.x - (10 * 2 * delta);
      }
    
    }
}