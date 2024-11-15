import * as THREE from 'three';
import { OrbitControls } from 'OrbitControls';

import cameraSetup from './modules/cameraSetup.js';
import lightSetup from './modules/lightSetup.js';
import createSurface from './modules/createSurface.js';


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const camera = cameraSetup();
const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 0, 0);


const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000000 );
scene.add(new THREE.AmbientLight(0xffffff, 0.5));
const dirLight = lightSetup();
scene.add(dirLight);
const mesh = createSurface();
scene.add( mesh );


function animate() {
	renderer.render( scene, camera );
};

window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}






