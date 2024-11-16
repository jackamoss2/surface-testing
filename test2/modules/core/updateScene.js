import * as THREE from 'three';

function updateScene(scene) {
    const meshes = [];

    const sphere1geometry = new THREE.SphereGeometry(0.1,8,8);
    const material = new THREE.MeshBasicMaterial( {
        color: 4169E1
     } );
    const sphere1 = new THREE.Mesh( sphere1geometry, material );
    sphere1.position.y = 0.1;
    sphere1.position.x = 1;
    
    meshes.push(sphere1);

    for (let i=0; i < meshes.length; i++) {
        scene.add(meshes[i]);
    }
}

export default updateScene;