/*jshint esversion: 6 */
// @ts-check

import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";

let flatHouseObCtr = 0;
export class FlatHouse extends GrObject {
    constructor(params = {}) {
      let flatHouse = new T.Group();
      let house = new T.Geometry();
      let roof = new T.BoxGeometry( 2.4, 0.1, 2.4 );
      roof.translate(0, 2, 0);

      house.vertices.push(new T.Vector3(-1, 0, 1)); // 0
      house.vertices.push(new T.Vector3(1, 0, 1)); // 1
      house.vertices.push(new T.Vector3(1, 2, 1)); // 2
      house.vertices.push(new T.Vector3(-1, 2, 1)); // 3
      house.vertices.push(new T.Vector3(-1, 0, -1)); // 4
      house.vertices.push(new T.Vector3(-1, 2, -1)); // 5
      house.vertices.push(new T.Vector3(1, 2, -1)); // 6
      house.vertices.push(new T.Vector3(1, 0, -1)); // 7
      
      let front1 = new T.Face3(0, 2, 3);
      let front2 = new T.Face3(0, 1, 2);
      let left1 = new T.Face3(1, 6, 2);
      let left2 = new T.Face3(1, 7, 6);
      let back1 = new T.Face3(7, 5, 6);
      let back2 = new T.Face3(7, 4, 5);
      let right1 = new T.Face3(4, 3, 5);
      let right2 = new T.Face3(4, 0, 3);

      house.faceVertexUvs = [[]];
      house.faces.push(front1);
      house.faceVertexUvs[0].push([
          new T.Vector2(0.4, 0),
          new T.Vector2(0.6, 1),
          new T.Vector2(0.4, 1)
      ]);
      house.faces.push(front2);
      house.faceVertexUvs[0].push([
          new T.Vector2(0.4, 0),
          new T.Vector2(0.6, 0),
          new T.Vector2(0.6, 1)
      ]);

      house.faces.push(left1);
      house.faceVertexUvs[0].push([
        new T.Vector2(0.75, 0.3),
        new T.Vector2(0.95, 1),
        new T.Vector2(0.75, 1)
     ]);
      house.faces.push(left2);
      house.faceVertexUvs[0].push([
        new T.Vector2(0.75, 0.3),
        new T.Vector2(0.95, 0.3),
        new T.Vector2(0.95, 1)
     ]);

      house.faces.push(right1);
      house.faceVertexUvs[0].push([
        new T.Vector2(0.05, 0.3),
        new T.Vector2(0.25, 1),
        new T.Vector2(0.05, 1)
      ]);

      house.faces.push(right2);
      house.faceVertexUvs[0].push([
        new T.Vector2(0.05, 0.3),
        new T.Vector2(0.25, 0.3),
        new T.Vector2(0.25, 1)
      ]);

      house.faces.push(back1);
      house.faces.push(back2);

      house.computeFaceNormals();
      house.uvsNeedUpdate = true;

      let texture = new T.TextureLoader().load("./images/house.png");
      let material1 = new T.MeshStandardMaterial({ map: texture, roughness: 0.75, color: "lightpink"});
      let material2 = new T.MeshStandardMaterial({ roughness: 0.75, color: "brown"});

      let mesh1 = new T.Mesh(house, material1);
      flatHouse.add(mesh1);
      let mesh2 = new T.Mesh(roof, material2);
      flatHouse.add(mesh2);
      super(`FlatHouse-${flatHouseObCtr++}`, flatHouse);
      this.whole_ob = flatHouse;
      
      // put the object in its place
      this.whole_ob.position.x = params.x ? Number(params.x) : 0;
      this.whole_ob.position.y = params.y ? Number(params.y) : 0;
      this.whole_ob.position.z = params.z ? Number(params.z) : 0;
      let scale = params.size ? Number(params.size) : 1;
      flatHouse.scale.set(scale, scale, scale);
    }
  }

let pyramidHipObCtr = 0;
export class PyramidHip extends GrObject {
    constructor(params = {}) {
      let pyramidHip = new T.Group();
      let house = new T.Geometry();
      let roof = new T.Geometry();

      house.vertices.push(new T.Vector3(-1, 0, 1)); // 0
      house.vertices.push(new T.Vector3(1, 0, 1)); // 1
      house.vertices.push(new T.Vector3(1, 2, 1)); // 2
      house.vertices.push(new T.Vector3(-1, 2, 1)); // 3
      house.vertices.push(new T.Vector3(-1, 0, -1)); // 4
      house.vertices.push(new T.Vector3(-1, 2, -1)); // 5
      house.vertices.push(new T.Vector3(1, 2, -1)); // 6
      house.vertices.push(new T.Vector3(1, 0, -1)); // 7

      roof.vertices.push(new T.Vector3(1, 2, 1)); // 2 0
      roof.vertices.push(new T.Vector3(-1, 2, 1)); // 3 1
      roof.vertices.push(new T.Vector3(-1, 2, -1)); // 5 2
      roof.vertices.push(new T.Vector3(1, 2, -1)); // 6 3
      roof.vertices.push(new T.Vector3(0, 3, 0)); // 8 4

      let front1 = new T.Face3(0, 2, 3);
      let front2 = new T.Face3(0, 1, 2);
      let left1 = new T.Face3(1, 6, 2);
      let left2 = new T.Face3(1, 7, 6);
      let back1 = new T.Face3(7, 5, 6);
      let back2 = new T.Face3(7, 4, 5);
      let right1 = new T.Face3(4, 3, 5);
      let right2 = new T.Face3(4, 0, 3);

      let roof1 = new T.Face3(0, 3, 4);
      let roof2 = new T.Face3(3, 2, 4);
      let roof3 = new T.Face3(2, 1, 4);
      let roof4 = new T.Face3(1, 0, 4);

      house.faceVertexUvs = [[]];
      house.faces.push(front1);
      house.faceVertexUvs[0].push([
          new T.Vector2(0, 0),
          new T.Vector2(1, 1),
          new T.Vector2(0, 1)
      ]);
      house.faces.push(front2);
      house.faceVertexUvs[0].push([
          new T.Vector2(0, 0),
          new T.Vector2(1, 0),
          new T.Vector2(1, 1)
      ]);

      house.faces.push(left1);
      house.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 1),
        new T.Vector2(0, 1)
     ]);
      house.faces.push(left2);
      house.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1, 1)
     ]);

      house.faces.push(right1);
      house.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 1),
        new T.Vector2(0, 1)
      ]);

      house.faces.push(right2);
      house.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1, 1)
      ]);

      house.faces.push(back1);
      house.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 1),
        new T.Vector2(0, 1)
      ]);
      house.faces.push(back2);
      house.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(1, 1)
      ]);

      roof.faceVertexUvs = [[]];
      roof.faces.push(roof1);
      roof.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(0.5, 1)
      ]);
      roof.faces.push(roof2);
      roof.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(0.5, 1)
      ]);
      roof.faces.push(roof3);
      roof.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(0.5, 1)
      ]);
      roof.faces.push(roof4);
      roof.faceVertexUvs[0].push([
        new T.Vector2(0, 0),
        new T.Vector2(1, 0),
        new T.Vector2(0.5, 1)
      ]);

      house.computeFaceNormals();
      house.uvsNeedUpdate = true;

      roof.computeFaceNormals();
      roof.uvsNeedUpdate = true;


      let texture = new T.TextureLoader().load("./images/Brick.jpeg");
      let texture2 = new T.TextureLoader().load("./images/roof.jpeg");
      let material1 = new T.MeshStandardMaterial({ map: texture, roughness: 0.75, color: "white"});
      let material2 = new T.MeshStandardMaterial({ map: texture2, roughness: 0.75, color: "white"});

      let mesh1 = new T.Mesh(house, material1);
      pyramidHip.add(mesh1);
      let mesh2 = new T.Mesh(roof, material2);
      pyramidHip.add(mesh2);

      super(`PyramidHip-${pyramidHipObCtr++}`, pyramidHip);
      this.whole_ob = pyramidHip;
      
      // put the object in its place
      this.whole_ob.position.x = params.x ? Number(params.x) : 0;
      this.whole_ob.position.y = params.y ? Number(params.y) : 0;
      this.whole_ob.position.z = params.z ? Number(params.z) : 0;
      let scale = params.size ? Number(params.size) : 1;
      pyramidHip.scale.set(scale, scale, scale);
    }
  }