import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';

import cameraSetup from './modules/cameraSetup.js';
import newRenderer from './modules/startup/newRenderer.js';
import newScene from './modules/startup/newScene.js';


const renderer = newRenderer();
document.body.appendChild(renderer.domElement);

const scene = newScene();

const camera = cameraSetup();
const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 0, 0);





function animate() {
	renderer.render( scene, camera );
};
renderer.setAnimationLoop(animate);

window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}
