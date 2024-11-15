import * as THREE from 'three';

function createBobblesList() {
  const geometry = createTriangleBufferGeometry();
  // const geometry = createSquareBufferGeometry();

  const material = new THREE.MeshBasicMaterial( {
    color: 0x00ff00,
    side: THREE.DoubleSide
 } );
  const mesh = new THREE.Mesh( geometry, material );

  return mesh;
}

export default createBobblesList;