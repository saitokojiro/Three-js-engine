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
			let positionJson = {x:0,y:0,z:0}
			this.setScale(0.5, 0.5, 0.5)
			this.setPosition(0, -0.3, -10)
			console.log("scene loaded")
			this.debug.setNameFolder("ALowThree")
			this.debug.addParameter(this.getPosition(), "x", -50, 50)
			this.debug.addParameter(this.getPosition(), "y", -50, 50)
			this.debug.addParameter(this.getPosition(), "z", -50, 50)
			
		}

    }


	loop() {
		const loop = () => {
			requestAnimationFrame(loop);
			if(this.scene){
				this.getPosition(true)
			}
		};
		loop();
	}
	
}
