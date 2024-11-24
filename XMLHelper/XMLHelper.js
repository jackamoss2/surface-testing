import * as THREE from 'three';

import readLocalxml from './modules/readLocalxml';

function tester() {
    console.log('test');
}

// function xmlParser(xmlString) {
//     var parser = new DOMParser();
//     xml = parser.parseFromString(xml, "text/xml");
//     xmlSurfaces = xml.getElementsByTagName("Surface");
//     return xmlSurfaces;
// };

const dataSource = "Wilsonville_Ramp.xml";
const xml = readLocalxml("./geometry/" + dataSource);
const surfaces = xml.getElementsByTagName("Surface");
for (let i=0;i<surfaces.length();i++) {
    xmlToThreeSurfaces(surfaces[i]);
};

function xmlToThreeSurfaces(surface) {

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

    for (let i=0; i<data.length;i++) {
        // const geometry = fn(data[i].source);
        // const mesh = THREE.mesh(geometry, data[i].material);
        // meshes.push(mesh)
    }

    return meshes;
}


export { tester, basicMeshes };