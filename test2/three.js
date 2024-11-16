import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';

import newRenderer from './modules/core/newRenderer.js';
import newScene from './modules/core/newScene.js';
import newCamera from './modules/core/newCamera.js';
import onWindowResize from './modules/core/onWindowResize.js';


const renderer = newRenderer();
const scene = newScene();
const camera = newCamera();


const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 0, 0);

function animate() {
	renderer.render(scene, camera);
};
renderer.setAnimationLoop(animate);

document.body.appendChild(renderer.domElement);

window.addEventListener("resize", onWindowResize, false);