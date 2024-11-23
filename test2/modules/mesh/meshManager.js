import * as THREE from 'three';
import readLocalFile from '../core/readLocalFile';

const material = new THREE.MeshBasicMaterial(
    {
        color: 0x777777,
        wireframe: true
    }
);

const mesh = THREE.mesh(geometry, material);
