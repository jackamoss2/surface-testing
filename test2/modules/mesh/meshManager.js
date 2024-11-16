// initiate function
// update function

import * as THREE from 'three';

const meshes = [];

// ! ! ! ! ! ! ! ! 
// turn into class !
// ! ! ! ! ! ! ! ! 

new function updateMeshes(scene) {
    for (let i=0; i<meshes.length; i++) {
        scene.add(meshes[i]);
    }
};


// createMesh(geometry, material)
// loadGeometryXML() 