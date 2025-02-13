import * as THREE from "three";
import { CSS3DRenderer, CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer"
export class ObjHtml {
    el: any;
    constructor(el: any) {
        this.el = el
    }

    ObjectHTML = (isSelect: boolean = false) => {
        if (isSelect) {
            this.el.classList.add("s")
        }
        let elWidth = (this.el.style.width.split("px")[0] - 1) / 10
        let elHeight = (this.el.style.height.split("px")[0] - 1) / 10
        const obj = new THREE.Object3D()
        let cssElement = new CSS3DObject(this.el);
        cssElement.scale.set(0.1, 0.1, 0.1);
        obj.css3dObject = cssElement;
        obj.add(cssElement)
        let materiala = new THREE.MeshPhongMaterial({
            opacity: 0.15,
            color: new THREE.Color(0x111111),
            blending: THREE.NoBlending,
            side: THREE.DoubleSide,
        });
        let geometrya = new THREE.BoxGeometry(elWidth, elHeight, 0.001);
        let mesh = new THREE.Mesh(geometrya, materiala);
        obj.add(mesh);
        return obj
    }

}