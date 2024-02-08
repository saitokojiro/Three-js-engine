import * as THREE from "three";
import { baseMap } from "../asset/map/baseMap";

export class config {
	//renderer = 
	constructor() {
		this.renderer = new THREE.WebGLRenderer({ antialias:false, alpha:false});
		this.scene = new baseMap().scene;
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

		
		this.init();
		this.loop();
	}
	init() {
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		

		document.body.appendChild(this.renderer.domElement);
		this.camera.updateProjectionMatrix();
		this.camera.position.set(0,0,0);
		this.camera.rotation.set(0,0,0);
		this.scene.add(this.camera)
		console.log(this.scene)
	}

	loop() {
        const loop =()=>{
           // requestAnimationFrame(loop);
            this.renderer.render(this.scene, this.camera);
        }
        loop()
	}
}
