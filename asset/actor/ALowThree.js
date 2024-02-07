import * as THREE from "three";
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { AActor } from "../../core/engine/AActor";

export class ALowThree extends AActor {
    object
    constructor(scene) {
		super();
		this.scene = scene;
		this.init();
		this.loop();
	}
	async init() {
		

		if(this.scene){
			this.mesh('./../../asset/assets/btn/mediaPlayer.gltf', this.scene)
			this.setScale(0.5, 0.5, 0.5)
			this.setPosition(0, -0.3, -10)
			console.log("scene loaded")
		}

    }


	loop() {
		const loop = () => {
			requestAnimationFrame(loop);
		};
		loop();
	}
	
}
