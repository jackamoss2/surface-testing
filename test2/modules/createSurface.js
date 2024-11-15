// https://threejs.org/docs/?q=geometry#api/en/core/BufferGeometry

import * as THREE from 'three';

function createSurface() {
    // const geometry = new THREE.BufferGeometry(); // create a simple square shape. We duplicate the top left and bottom right // vertices because each vertex needs to appear once per triangle.
   
    // const vertices = new Float32Array( [
    //     -1.0, -1.0, 1.0, // v0
    //     1.0, -1.0, 1.0, // v1
    //     1.0, 1.0, 1.0, // v2
    //     1.0, 1.0, 1.0, // v3
    //     -1.0, 1.0, 1.0, // v4
    //     -1.0, -1.0, 1.0 // v5
    // ] ); // itemSize = 3 because there are 3 values (components) per vertex

    // geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    // const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    // const mesh = new THREE.Mesh( geometry, material );

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
    const mesh = new THREE.Mesh( geometry, material );

    return mesh;
  }

export default createSurface;