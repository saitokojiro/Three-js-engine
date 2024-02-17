import * as THREE from 'three';

import { config } from './config.tsx';
import '../asset/baseAsset.js'

new config()


function animate() {
    requestAnimationFrame(animate);
}
animate();