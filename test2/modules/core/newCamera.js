import * as THREE from 'three';


function newCamera() {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);

    camera.position.x = 1;
    camera.position.y = 5;
    camera.position.z = 5;

    return camera;
}

export default newCamera;