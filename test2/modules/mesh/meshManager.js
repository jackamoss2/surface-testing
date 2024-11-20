import * as THREE from 'three';

// ! ! ! ! ! ! ! ! ?
// turn into class ?
// ! ! ! ! ! ! ! ! ?

// meshes.initiate()
// meshes.update()
// meshes.removeMesh(id)
// meshes.addMesh({ //(includes mgr.update)
//    geometry: 
//    material: material,
// })
  
let idCounter = 0;
const meshes = [
];

function createGeometryXML (xmlDataString) {
    
};

function addMesh (mesh) {
    meshes.push(mesh);
    idCounter++;
};


const geometry = createGeometryXML(xmlDataString);
const material = new THREE.MeshBasicMaterial(
    {
        color: 0x777777,
        wireframe: true
    }
);

const mesh = THREE.mesh(geometry, material);
addMesh(mesh);


