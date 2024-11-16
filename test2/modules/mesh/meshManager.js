import * as THREE from 'three';

const meshes = [
    {
        id: 1,
        geometry: geometry,
        material: material,
        mesh: mesh(geometry, material)
    }
];

// ! ! ! ! ! ! ! ! 
// turn into class !
// ! ! ! ! ! ! ! ! 

// meshManager.initiate()
// meshManager.update()
// meshManager.removeMesh(id)
// meshManager.addMesh({ //(includes mgr.update)
//    geometry: 
//    material: material,
// })