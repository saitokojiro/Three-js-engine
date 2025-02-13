import * as THREE from "three";
import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer"
import { baseMap } from "../asset/map/baseMap";
import { baseAsset } from "../asset/baseAsset";
import { WebOculusion } from "./engine/WebOculusion";
import { ObjHtml } from "./engine/ObjHtml";

export class config {
  renderer: any;
  rendererCSS: any;
  scene: any;
  camera: any;
  constructor() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    this.rendererCSS = new CSS3DRenderer();
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
    this.rendererCSS.setSize(window.innerWidth, window.innerHeight);
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

    let element = document.createElement('div');
    element.className = 'hell'
    element.innerHTML = '<h1>This is an H1 Element.</h1>' +
      '<span class="large">Hello Three.js</span>' ;
    element.style.width = 251 + "px"
    element.style.height = 251 + "px"
    element.style.opacity = "0.999";
    element.style.boxSizing = "border-box";
    element.style.overflow = 'visible';
    element.style.background = "red"


    let htmlObjs = new ObjHtml(element).ObjectHTML()
    htmlObjs.position.z = -40
    htmlObjs.position.y = -5
    this.scene.add(htmlObjs)

    //let background = new WebOculusion().makeElementObject('div', 200, 200)
    // let background; //new WebOculusion().makeElementObject('div', 200, 200)
    //background.css3dObject.el.textContent = "I am a <div> element intersecting a WebGL sphere.\n\nThis text is editable!"
    //background.css3dObject.el.setAttribute('contenteditable', '')
    // background.position.z = -400
    // background.css3dObject.element.style.opacity = "1"
    //background.css3dObject.element.style.padding = '10px'
    const color1 = '#7bb38d'
    const color2 = '#71a381'
    /* background.children[0].element.style.background = `repeating-linear-gradient(
       45deg,
       ${color1},
       ${color1} 10px,
       ${color2} 10px,
       ${color2} 20px
   )`*/
    /* background.css3dObject.element.style.background = `repeating-linear-gradient(
     45deg,
     ${color1},
     ${color1} 10px,
     ${color2} 10px,
     ${color2} 20px
 )`*/

    //this.scene.add(background);
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
