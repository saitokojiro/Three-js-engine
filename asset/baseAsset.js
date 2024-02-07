import * as THREE from "three";

import {baseMap} from './map/baseMap'
import {baseActor} from './actor/baseActor'

export class baseAsset {
	constructor() {
		this.init();
		this.loop();
	}
	init() {

    }

	loop() {
		const loop = () => {
			requestAnimationFrame(loop);
		};
		loop();
	}
}
