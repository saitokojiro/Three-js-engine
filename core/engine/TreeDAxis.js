import { Vector3 } from "three";

export class TreeDAxis {
    constructor(){
        this.scale = new Vector3(0, 0, 0);
		this.position = new Vector3(0, 0, 0);
		this.rotation = new Vector3(0,0,0);
    }

    //setter
	setScale(x = 0.5, y = 0.5, z = 0.5) {
		this.scale.set(x, y, z);
	}
	setPosition(x = 0, y = 0, z = 0) {
		this.position.set(x, y, z);
	}

	setRotation(x = 0, y = 0, z = 0){
		this.rotation.set(x, y, z);
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
	getRotation(debug = false) {
		if (debug) {
			console.log(this.position);
		}
		return this.rotation;
	}

}