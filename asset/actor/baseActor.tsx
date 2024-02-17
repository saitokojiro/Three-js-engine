import * as THREE from "three";

import { ALowThree } from "./ALowThree";

export class baseActor {
  scene: any
  constructor(scene) {
    this.scene = scene;
    this.init();
    this.loop();
  }
  init() {
    new ALowThree(this.scene);
  }

  loop() {
    const loop = () => {
      requestAnimationFrame(loop);
    };
    loop();
  }
}
