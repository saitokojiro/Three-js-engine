import * as THREE from "three";
import * as dat from 'dat.gui';

const gui = new dat.GUI();
let folder: any;

export let setNameFolder = (folderName = 'default') => {
    folder = gui.addFolder(folderName)
}

export let addParameter = (target, val, min, max) => {
    folder.add(target, val, min, max)
}