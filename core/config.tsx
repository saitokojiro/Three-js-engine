import * as THREE from "three";
import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer"
import { baseMap } from "../asset/map/baseMap";
import { baseAsset } from "../asset/baseAsset";

export class config {
  renderer: any;
  rendererCSS: any;
  scene: any;
  camera: any;
  constructor() {
    this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
    this.rendererCSS = new CSS3DRenderer({ antialias: false, alpha: false });
    //this.scene = new baseMap().scene;
    this.scene = new baseAsset().sceneControl;
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    window.addEventListener("sceneChanged", event => {
      //@ts-ignore
      this.onSceneChanged(event.detail.newScene);
    });

    this.init();
    this.loop();
  }
  init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    let renderhtml = document.querySelector('.render')
    let rendercsshtml = document.querySelector('.cssrender')
    //document.body.appendChild(this.renderer.domElement);
    renderhtml?.appendChild(this.renderer.domElement);
    rendercsshtml?.appendChild(this.rendererCSS.domElement);
    this.camera.updateProjectionMatrix();
    this.camera.position.set(0, 0, 0);
    this.camera.rotation.set(0, 0, 0);
    this.scene.add(this.camera);
    console.log(this.scene);
  }

  onSceneChanged(newScene) {
    //console.log(newScene)
    this.scene = newScene;
  }

  loop() {
    const loop = () => {
      requestAnimationFrame(loop);
      this.renderer.render(this.scene, this.camera);
      this.rendererCSS.render(this.scene, this.camera);
    };
    loop();
  }
}
