import * as THREE from "three";
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { AActor } from "../../core/engine/AActor";
import { generateUUID } from "three/src/math/MathUtils";

export class ALowThree extends AActor {
    object
    constructor(scene) {
		super();
		this.scene = scene;
		this.init();
		this.loop();
		this.update()
	}
	async init() {
		if(this.scene){
			
			this.mesh('./../../asset/assets/btn/mediaPlayer.gltf', this.scene)
			
			let positionJson = {x:0,y:0,z:0}
			this.setScale(0.5, 0.5, 0.5)
			this.setPosition(0, -0.3, -10)
			let UUID = generateUUID().split("-");
			this.debug.setNameFolder("player : " + UUID[0])
			
			
		}

    }

	update(){

		
		if(this.AssetComponent !== undefined){
			
			console.log(this.AssetComponent)
			
			this.debug.addParameter(this.position, "x", -50, 50)
			this.debug.addParameter(this.position, "y", -50, 50)
			this.debug.addParameter(this.position, "z", -50, 50)
			this.debug.addParameter(this.rotation, "x", -50, 50)
		}else{
			setTimeout(() => {
				this.update()
			}, 500);
		}
	}
	testVal = 5;
	loop() {
		const loop = () => {
			requestAnimationFrame(loop);
			if(this.scene){
				if(this.AssetComponent !== undefined){
					this.testVal += 0.01
			
					//console.log(this.AssetComponent)
					this.rotation.set(0, this.testVal,0)
				}
			}
		};
		loop();
	}
	
}
