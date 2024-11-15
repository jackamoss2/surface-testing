import * as THREE from 'three';


function createSurface() {
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    const mesh = new THREE.Mesh( geometry, material );

    return mesh;
  }

export default createSurface;