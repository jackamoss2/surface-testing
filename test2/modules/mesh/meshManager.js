import * as THREE from 'three';
import readLocalFile from '../core/readLocalFile';

function createGeometryXML (xmlDataString) {

};

const geometry = createGeometryXML(xmlDataString);
const material = new THREE.MeshBasicMaterial(
    {
        color: 0x777777,
        wireframe: true
    }
);

const mesh = THREE.mesh(geometry, material);

// let idCounter = 0;
// const meshes = [];

// function addMesh (mesh) {
//     meshes.push({mesh: mesh, id: idCounter});
//     idCounter++;
// };

// for (leti=0;i<meshes.length;i++) {
//     screen.add(meshes[i].mesh);
// }
// addMesh(mesh);