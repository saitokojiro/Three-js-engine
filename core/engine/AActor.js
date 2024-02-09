import * as THREE from "three";
import { Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import * as C from "./control";
import { TreeDAxis } from "./TreeDAxis";

export class AActor extends TreeDAxis {
	constructor(path, scene) {
		super();
		//this.mesh(path, scene);
		this.scale = new Vector3(0, 0, 0);
		this.position = new Vector3(0, 0, 0);
		this.rotation = new Vector3(0, 0, 0);
		this.AssetComponent;
		this.ready = false;
		this.debug = C;
		this.loop();
		this.init();
	}

	init() {}


	//function add mesh
	async mesh(path, scene) {
		const loader = new GLTFLoader();
		const dracoloader = new DRACOLoader();

		dracoloader.setDecoderPath("/examples/jsm/libs/draco/");
		loader.setDRACOLoader(dracoloader);

		let modelA = await loader.loadAsync(path);
		let dracBtn = modelA.scene;
		this.AssetComponent = dracBtn;
		const box = new THREE.BoxHelper(dracBtn, 0xffffff);
		dracBtn.name = "mesh";
		dracBtn.scale.copy(this.scale);
		dracBtn.position.copy(this.position);
		this.position = dracBtn.position;
		this.scale = dracBtn.scale;
		this.rotation = dracBtn.rotation
		scene.add(dracBtn);
		dracBtn.add(box);
	}

	

	loop() {
		const loop = () => {
			requestAnimationFrame(loop);
		};
		loop();
	}
}
