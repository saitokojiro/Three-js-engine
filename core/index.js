import * as THREE from 'three';

import { config } from './config.js';
import '../asset/baseAsset.js'

new config()


function animate() {
    requestAnimationFrame( animate );
}
animate();