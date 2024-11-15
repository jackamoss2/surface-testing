import * as THREE from 'three';
import createTriangleBufferGeometry from './createBufferGeometry.js';
import createSquareBufferGeometry from './createBufferGeometry.js';

function createSurface() {
  const geometry = createTriangleBufferGeometry();
  // const geometry = createSquareBufferGeometry();

  const material = new THREE.MeshBasicMaterial( {
    color: 0x00ff00,
    side: THREE.DoubleSide
 } );
  const mesh = new THREE.Mesh( geometry, material );

  return mesh;
}

export default createSurface;