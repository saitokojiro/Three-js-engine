import * as THREE from "three";
import { CSS3DRenderer, CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer"
export class WebOculusion {
  htmlContent: string;
  cssContent: string;
  constructor() {
    this.htmlContent = "helloWorld";
  }

  init() {

  }

  makeElementObject(type: string, width: Number, height: Number, opacity: any = 1) {

    let obj = new THREE.Object3D()


    let el = document.createElement(type);
    el.style.width = width + "px";
    el.style.height = height + "px";
    el.style.opacity = opacity;
    el.style.boxSizing = "border-box";
    el.textContent = this.htmlContent;

    let css3dObject = new CSS3DObject(el);
    // obj.css3dObject = css3dObject;
    obj.add(css3dObject)

    let material = new THREE.MeshPhongMaterial({
      opacity: 0.15,
      color: new THREE.Color(0x111111),
      blending: THREE.NoBlending,
      // side	: THREE.DoubleSide,
    });

    let geometry = new THREE.BoxGeometry(width, height, 1);
    let mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    obj.lightShadowMesh = mesh
    obj.add(mesh);
    console.log(obj)
    return obj;

  }
}
