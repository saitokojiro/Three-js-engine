import * as THREE from "three";
import { Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import * as C from "./control";

export class AActor {
	constructor(path, scene) {
		//this.mesh(path, scene);
		this.scale = new Vector3(0, 0, 0);
		this.position = new Vector3(0, 0, 0);
		this.debug = C;
		this.loop();
		this.init();
	}

	init() {}

	//setter
	setScale(x = 0.5, y = 0.5, z = 0.5) {
		this.scale.set(x, y, z);
	}
	setPosition(x = 0, y = 0, z = 0) {
		this.position.set(x, y, z);
	}

	// getter
	getScale(debug = false) {
		if (debug) {
			console.log(this.scale);
		}
		return this.scale;
	}
	getPosition(debug = false) {
		if (debug) {
			console.log(this.position);
		}
		return this.position;
	}


	//function add mesh
	async mesh(path, scene) {
		const loader = new GLTFLoader();
		const dracoloader = new DRACOLoader();

		dracoloader.setDecoderPath("/examples/jsm/libs/draco/");
		loader.setDRACOLoader(dracoloader);

		let light = new THREE.DirectionalLight(0xffffff, 1);
		let helper = new THREE.DirectionalLightHelper(light, 5);
		light.position.set(0, 0.5, -1);
		light.scale.set(0.1, 0.1, 0.1);

		Promise.all([loader.loadAsync(path)]).then(([ld]) => {
			let dracBtn = ld.scene;
			const box = new THREE.BoxHelper(ld.scene, 0xffffff);
			dracBtn.name = "mesh";
			dracBtn.scale.copy(this.getScale());
			dracBtn.position.copy(this.getPosition());

			scene.add(dracBtn);
			dracBtn.add(box);
			dracBtn.add(light);
			dracBtn.add(helper);
			console.log("actor added");
		});
	}

	loop() {
		const loop = () => {
			requestAnimationFrame(loop);
		};
		loop();
	}
}
