import * as THREE from "three";

import { baseMap } from "./map/baseMap";
import { baseActor } from "./actor/baseActor";
import { baseMapR } from "./map/baseMapR";

export class baseAsset {
  sceneControl: any;
  constructor() {
    this.sceneControl;
    this.init();
    this.loop();
  }
  init() {
    this.sceneControl = new baseMap().scene;

    setTimeout(() => {
      this.setScene(new baseMapR().scene);
    }, 2000);
  }

  setScene(newScene) {
    if (this.sceneControl !== newScene) {
      if (typeof newScene == "object") {
        this.sceneControl = newScene;
        let event = new CustomEvent("sceneChanged", { detail: { newScene } });
        window.dispatchEvent(event);
      }
    }
  }

  loop() {
    const loop = () => {
      requestAnimationFrame(loop);
    };
    loop();
  }
}
