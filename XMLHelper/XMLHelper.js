import * as THREE from 'three';

import readLocalxml from './modules/readLocalxml.js';



const dataSource = "Wilsonville_Ramp.xml";
const xml = readLocalxml("./geometry/" + dataSource);
const htmlCollection = xml.getElementsByTagName("Surface");
const surfaces = [...htmlCollection];

for (let i=0;i<surfaces.length;i++) {
    xmlToThreeSurface(surfaces[i]);
};

function xmlToThreeSurface(surface) {

};


function basicMeshes() {
    const meshes = [];


    //package out materials?
    const concrete = new THREE.MeshBasicMaterial(
        {
            color: 0x777777
        }
    );
    const grayWireframe = new THREE.MeshBasicMaterial(
        {
            color: 0x777777,
            wireframe: true
        }
    );
    //----------------------


    const data = [
        {
            source: './geometry/2_Faces.xml',
            material: concrete
        }
    ];

    for (let i=0;i<data.length;i++) {
        // const geometry = fn(data[i].source);
        // const mesh = THREE.mesh(geometry, data[i].material);
        // meshes.push(mesh)
    }

    return meshes;
}


export { basicMeshes, xmlToThreeSurface };