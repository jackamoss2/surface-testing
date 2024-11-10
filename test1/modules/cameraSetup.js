import * as THREE from 'three';


function cameraSetup() {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

    camera.position.x = 0;
    camera.position.y = 5;
    camera.position.z = -5;

    return camera;
}

export default cameraSetup;