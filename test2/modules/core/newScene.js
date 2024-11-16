import * as THREE from 'three';

import lightSetup from './lightSetup.js';
import createSurface from '../createSurface.js';
import updateScene from '../createSurface.js';

function newScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const dirLight = lightSetup();
    scene.add(dirLight);
    const mesh = createSurface();
    scene.add(mesh);

    const size = 20;
    const divisions = 20;
    const gridHelper = new THREE.GridHelper( size, divisions );
    scene.add(gridHelper);
    updateScene(scene);

    return scene;
};

export default newScene;