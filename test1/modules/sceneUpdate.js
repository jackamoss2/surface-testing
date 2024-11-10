import * as THREE from 'three';

function updateScene() {
    meshes = [];

    const sphere1 = new THREE.SphereGeometry(1,8,8);
    sphere1.center = (1, 0, 1);
    meshes.push(sphere1);

    for (let i=0; i < meshes.length; i++) {
        scene.add(meshes[i]);
    }
}

export default updateScene;