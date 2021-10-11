/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { shaderMaterial } from "../libs/CS559-Framework/shaderHelper.js";

let boatObCtr = 0;
export class Boat extends GrObject {
    constructor(params = {}) {
      let map = new T.TextureLoader().load("./images/boat.jpeg");

      let material = shaderMaterial("./shaders/12-01.vs", "./shaders/12-01.fs", {
      side: T.DoubleSide,
      uniforms: {
        colormap: { value: map },
      },
      });

      let boat = new T.Group();
      let geometry = new T.BoxGeometry(3, 0.3, 1.5);
      //let mat = new T.MeshStandardMaterial( {color: '#966F33'} );
      let bottom = new T.Mesh(geometry, material);
      boat.add(bottom);
      
      let flagpoleG= new T.CylinderGeometry( 0.05, 0.05, 1.5, 32);
      let flagpoleMat = new T.MeshStandardMaterial( {color: '#C0C0C0', metalness: 1.0} );
      flagpoleG.translate(0, 0.75, 0);
      let flagpole = new T.Mesh(flagpoleG, flagpoleMat);
      boat.add(flagpole);

      let flagG= new T.CylinderGeometry( 0.9, 0.9, 0.1, 3);
      let flagMat = new T.MeshStandardMaterial( {color: '#ff6347'} );
      flagG.translate(-1.4, 0, 0.4);
      flagG.rotateZ(-Math.PI * 0.5);
      flagG.rotateY(Math.PI * 0.5);
      let flag = new T.Mesh(flagG, flagMat);
      boat.add(flag);

      super(`Boat-${boatObCtr++}`, boat);
      this.whole_ob = boat;
      
      // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    let scale = params.size ? Number(params.size) : 1;
    boat.scale.set(scale, scale, scale);
    }
}

let trainObCtr = 0;
export class Train extends GrObject {
    constructor(track, params = {}){
      let train = new T.Group();
      let cylinder = new T.CylinderGeometry(0.3, 0.3, 1.2, 30);
      cylinder.rotateZ(Math.PI/2);
      cylinder.translate(-1, 0.6, 0);
      cylinder.rotateY(Math.PI/2);

      let materialCyl = new T.MeshStandardMaterial({roughness: 0.5, color: "grey"});
      let mesh_cyl = new T.Mesh(cylinder, materialCyl);
      train.add(mesh_cyl);

      let carriage = new T.BoxGeometry(1.1, 1, 0.7);
      carriage.translate(0, 0.95, 0);
      carriage.rotateY(Math.PI/2);
      let materialCar = new T.MeshStandardMaterial({roughness: 0.5, color: "red"});
      let mesh_car = new T.Mesh(carriage, materialCar);
      train.add(mesh_car);

      let materialWhe = new T.MeshStandardMaterial({roughness: 0.5, color: "black"});
      let wheel1 = new T.CylinderGeometry(0.2, 0.2, 0.1, 30);
      wheel1.rotateZ(Math.PI/2);
      //wheel1.rotateY(Math.PI/2);
      wheel1.translate(0.2, 0.2, 0.8);
      let mesh_w1 = new T.Mesh(wheel1, materialWhe);
      train.add(mesh_w1);

      let wheel2 = new T.CylinderGeometry(0.2, 0.2, 0.1, 30);
      wheel2.rotateZ(Math.PI/2);
      //wheel2.rotateY(Math.PI/2);
      wheel2.translate(0.2, 0.2, 1.2);
      let mesh_w2 = new T.Mesh(wheel2, materialWhe);
      train.add(mesh_w2);
  
      let wheel3 = new T.CylinderGeometry(0.2, 0.2, 0.1, 30);
      wheel3.rotateZ(Math.PI/2);
      //wheel3.rotateY(Math.PI/2);
      wheel3.translate(-0.2, 0.2, 0.8);
      let mesh_w3 = new T.Mesh(wheel3, materialWhe);
      train.add(mesh_w3);

      let wheel4 = new T.CylinderGeometry(0.2, 0.2, 0.1, 30);
      wheel4.rotateZ(Math.PI/2);
      //wheel4.rotateY(Math.PI/2);
      wheel4.translate(-0.2, 0.2, 1.2);
      let mesh_w4 = new T.Mesh(wheel4, materialWhe);
      train.add(mesh_w4);
  
      let wheel5 = new T.CylinderGeometry(0.25, 0.25, 0.1, 30);
      wheel5.rotateZ(Math.PI/2);
      //wheel5.rotateY(Math.PI/2);
      wheel5.translate(-0.3, 0.25, 0.2);
      let mesh_w5 = new T.Mesh(wheel5, materialWhe);
      train.add(mesh_w5);
  
      let wheel6 = new T.CylinderGeometry(0.25, 0.25, 0.1, 30);
      wheel6.rotateZ(Math.PI/2);
      //wheel6.rotateY(Math.PI/2);
      wheel6.translate(-0.3, 0.25, -0.2);
      let mesh_w6 = new T.Mesh(wheel6, materialWhe);
      train.add(mesh_w6);
      
      let wheel7 = new T.CylinderGeometry(0.25, 0.25, 0.1, 30);
      wheel7.rotateZ(Math.PI/2);
      //wheel7.rotateY(Math.PI/2);
      wheel7.translate(0.3, 0.25, 0.2);
      let mesh_w7 = new T.Mesh(wheel7, materialWhe);
      train.add(mesh_w7);
  
      let wheel8 = new T.CylinderGeometry(0.25, 0.25, 0.1, 30);
      wheel8.rotateZ(Math.PI/2);
      //wheel8.rotateY(Math.PI/2);
      wheel8.translate(0.3, 0.25, -0.2);
      let mesh_w8 = new T.Mesh(wheel8, materialWhe);
      train.add(mesh_w8);
  
      let chiBot = new T.CylinderGeometry(0.15, 0.15, 0.4, 30);
      chiBot.translate(-1, 1, 0);
      chiBot.rotateY(Math.PI/2);
      let mesh_bot = new T.Mesh(chiBot, materialCyl);
      train.add(mesh_bot);

      let chiTop = new T.CylinderGeometry(0.2, 0.15, 0.2, 30);
      chiTop.translate(-1, 1.3, 0);
      chiTop.rotateY(Math.PI/2);
      let materialTop = new T.MeshStandardMaterial({roughness: 0.5, color: "black"});
      let mesh_top = new T.Mesh(chiTop, materialTop);
      train.add(mesh_top);

      let window = new T.BoxGeometry(0.5, 0.4, 0.71);
      window.translate(0, 1.1, 0);
      window.rotateY(Math.PI/2);
      let materialWin = new T.MeshStandardMaterial({roughness: 0.5, color: "white"});
      let mesh_win = new T.Mesh(window, materialWin);
      train.add(mesh_win);

      // @ts-ignore
      super(`Train-${trainObCtr++}`, train);
      this.whole_ob = train;

      this.track = track;
      this.u = 0;
      this.rideable = this.objects[0];

      // put the object in its place
      this.whole_ob.position.x = params.x ? Number(params.x) : 0;
      this.whole_ob.position.y = params.y ? Number(params.y) : 0;
      this.whole_ob.position.z = params.z ? Number(params.z) : 0;
      let scale = params.size ? Number(params.size) : 1;
      train.scale.set(scale, scale, scale);
    }

    stepWorld(delta, timeOfDay) {
      this.u += delta / 2000;
      let pos = this.track.eval(this.u);
      this.objects[0].position.set(10+pos[0], pos[1], pos[2]);
      let dir = this.track.tangent(this.u);
      let zAngle = Math.atan2(dir[2], dir[0]);
      this.objects[0].rotation.y = -zAngle - Math.PI / 2;
    }
  }

  let carriageObCtr = 0;
  export class Carriage extends GrObject {
    constructor(track, params = {}){
      let greyMat = new T.MeshStandardMaterial({roughness: 0.5, color: "grey"});
      let blackMat = new T.MeshStandardMaterial({roughness: 0.5, color: "black"});

      let train = new T.Group();

      let connectG = new T.BoxGeometry(0.2, 0.15, 0.7);
      connectG.translate(0, 0.4, 0.5);
      let connect = new T.Mesh(connectG, blackMat);
      train.add(connect);
      
      let cargoG = new T.BoxGeometry(1.1, 0.75, 0.6);
      cargoG.rotateY(Math.PI/2);
      cargoG.translate(0, 0.7, 0);
      let cargo = new T.Mesh(cargoG, greyMat);
      train.add(cargo);
  
      let wheel1G = new T.CylinderGeometry(0.2, 0.2, 0.1, 30);
      wheel1G.rotateZ(Math.PI/2);
      wheel1G.translate(-0.3, 0.25, 0.25);
      let wheel1 = new T.Mesh(wheel1G, blackMat);
      train.add(wheel1);
  
      let wheel2G = new T.CylinderGeometry(0.2, 0.2, 0.1, 30);
      wheel2G.rotateZ(Math.PI/2);
      wheel2G.translate(-0.3, 0.25, -0.25);
      let wheel2 = new T.Mesh(wheel2G, blackMat);
      train.add(wheel2);
      
      let wheel3G = new T.CylinderGeometry(0.2, 0.2, 0.1, 30);
      wheel3G.rotateZ(Math.PI/2);
      wheel3G.translate(0.3, 0.25, 0.25);
      let wheel3 = new T.Mesh(wheel3G, blackMat);
      train.add(wheel3);
  
      let wheel4G = new T.CylinderGeometry(0.2, 0.2, 0.1, 30);
      wheel4G.rotateZ(Math.PI/2);
      wheel4G.translate(0.3, 0.25, -0.25);
      let wheel4 = new T.Mesh(wheel4G, blackMat);
      train.add(wheel4);
      
      super(`Carriage-${carriageObCtr++}`, train);
      this.whole_ob = train;
      this.track = track;
      this.u = 0;
      this.ridePoint = new T.Object3D();
      this.ridePoint.translateY(0.8);
      this.ridePoint.rotateY(-Math.PI/2);
      this.objects[0].add(this.ridePoint);
      this.rideable = this.ridePoint;

      // put the object in its place
      this.whole_ob.position.x = params.x ? Number(params.x) : 0;
      this.whole_ob.position.y = params.y ? Number(params.y) : 0;
      this.whole_ob.position.z = params.z ? Number(params.z) : 0;
      let scale = params.size ? Number(params.size) : 1;
      train.scale.set(scale, scale, scale);
    }
    stepWorld(delta, timeOfDay) {
      this.u += delta / 2000;
      let pos = this.track.eval(this.u);
      this.objects[0].position.set(10+pos[0], pos[1], pos[2]);
      let dir = this.track.tangent(this.u);
      let zAngle = Math.atan2(dir[2], dir[0]);
      this.objects[0].rotation.y = -zAngle - Math.PI / 2;
    }
  }

let quadCopObCtr = 0;
export class QuadCop extends GrObject {
    constructor(track, params = {}) {
      let quadCopter2 = new T.Group();
      // body
      let quadBody = new T.Shape();
      quadBody.moveTo(-5, -10);
      quadBody.lineTo(-6, -5);
      quadBody.lineTo(-6, 5);
      quadBody.lineTo(-5, 10);
      quadBody.lineTo(5, 10);
      quadBody.lineTo(6, 5);
      quadBody.lineTo(6, -5);
      quadBody.lineTo(5, -10);
      quadBody.lineTo(-5, -10);
      let bodyExtrude = {
        depth: 5,
          bevelEnabled: false
      };

      let geometry = new T.ExtrudeGeometry(quadBody, bodyExtrude );
      //geometry.rotateX(Math.PI/2);
      let material = new T.MeshStandardMaterial({ color: '#888888', roughness:0.5, metalness:0.7 });
      let bodyMesh2 = new T.Mesh(geometry, material);
      bodyMesh2.rotateX(Math.PI / 2);
      bodyMesh2.scale.set(0.05, 0.05, 0.05);
      quadCopter2.add(bodyMesh2);

      let front_geom = new T.CylinderGeometry(0.15, 0.25, 0.2, 4);
      let front2 = new T.Mesh(front_geom, material);
      front2.translateZ(0.6);
      front2.translateY(-0.1);
      front2.rotateX(Math.PI / 2);
      quadCopter2.add(front2);

      let line_geom  = new T.BoxGeometry(1.5, 0.1, 0.1);
      //line_geom.rotateX(Math.PI/2);
      let line = new T.Mesh(line_geom, material);
      line.translateZ(-0.1);
      line.translateY(-0.1);
      quadCopter2.add(line);

      let wing_group2 = new T.Group();
      let bar_geom  = new T.BoxGeometry(0.1, 0.6, 0.1);
      //bar_geom.rotateX(Math.PI/2)
      let bar1 = new T.Mesh(bar_geom, material);
      bar1.rotateZ(Math.PI/2);
      let bar2 = new T.Mesh(bar_geom, material);
      wing_group2.add(bar1);
      wing_group2.add(bar2);
      wing_group2.translateZ(-0.5)
      wing_group2.translateY(-0.1)
      quadCopter2.add(wing_group2);

      let wing_group4 = new T.Group();
      let bar5 = new T.Mesh(bar_geom, material);
      bar5.rotateZ(Math.PI/2);
      let bar6 = new T.Mesh(bar_geom, material);
      wing_group4.add(bar5);
      wing_group4.add(bar6);
      wing_group4.translateX(0.7)
      wing_group4.translateZ(-0.2)
      wing_group4.translateY(-0.1)
      quadCopter2.add(wing_group4);

      let wing_group5 = new T.Group();
      let bar7 = new T.Mesh(bar_geom, material);
      bar7.rotateZ(Math.PI/2);
      let bar8 = new T.Mesh(bar_geom, material);
      wing_group5.add(bar7);
      wing_group5.add(bar8);
      wing_group5.translateX(-0.7)
      wing_group5.translateZ(-0.2)
      wing_group5.translateY(-0.1)
      quadCopter2.add(wing_group5);
      quadCopter2.position.y = 1.5;

      super(`QuadCop-${quadCopObCtr++}`, quadCopter2);
      this.whole_ob = quadCopter2;
      this.time = 0;
      this.wing_group2 = wing_group2;
      this.wing_group4 = wing_group4;
      this.wing_group5 = wing_group5;
      this.track = track;

      this.ridePoint = new T.Object3D();
      this.ridePoint.rotateY(Math.PI/2);
      this.ridePoint.rotateX(Math.PI/8);
      this.objects[0].add(this.ridePoint);
      this.rideable = this.ridePoint;

      // put the object in its place
    this.whole_ob.position.x = params.x ? Number(params.x) : 0;
    this.whole_ob.position.y = params.y ? Number(params.y) : 0;
    this.whole_ob.position.z = params.z ? Number(params.z) : 0;
    let scale = params.size ? Number(params.size) : 1;
    quadCopter2.scale.set(scale, scale, scale);
    }
}