import * as THREE from 'three';
import createTriangleBufferGeometry from './createTriangleBufferGeometry.js';
import createSquareBufferGeometry from './createTriangleBufferGeometry.js';

function createSurface() {
  // const geometry = createTriangleBufferGeometry();
  const geometry = createSquareBufferGeometry();

  const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
  const mesh = new THREE.Mesh( geometry, material );

  return mesh;
}

export default createSurface;