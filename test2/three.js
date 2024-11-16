import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';

import newRenderer from './modules/core/newRenderer.js';
import newScene from './modules/core/newScene.js';
import newCamera from './modules/core/newCamera.js';


const renderer = newRenderer();
const scene = newScene();
const camera = newCamera();


const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 0, 0);


document.body.appendChild(renderer.domElement);


renderer.setAnimationLoop(animate);
function animate() {
	renderer.render(scene, camera);
};

window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
};