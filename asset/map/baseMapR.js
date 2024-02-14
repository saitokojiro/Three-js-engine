import * as THREE from "three";
import { ALowThree } from "../actor/ALowThree";

export class baseMapR {
	constructor() {
		console.log('construct')
		this.scene = new THREE.Scene();
		this.light = new THREE.AmbientLight(0xffffff, 1)
		//this.helper = new THREE.DirectionalLightHelper( this.light, 5 );
		this.init();
		//this.addLowThree()
		//this.loop();
	}
	init() {
		console.log("init")
		this.addLowThree()
		this.scene.add(this.light)
		this.light.position.set(0,0.5,-1)
		this.light.scale.set(0.1, 0.1, 0.1)
		
    }

	async addLowThree(){

		if(this.scene){
			new ALowThree(this.scene).position.set(0,-1,-5)
		}else{
			console.log('baseMap : scene not loaded')
		}
		
	}

	loop() {
		const loop = () => {
			requestAnimationFrame(loop);
		};
		loop();
	}
}
