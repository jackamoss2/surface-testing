import * as THREE from 'three';

function createTriangleBufferGeometry() {
    const vertices = [
        1.0, 0.1, 2.0,
        1.0, 0.1, -1.0,
        -1.0, 0.1, -1.0,
        -1.0, 0.1, 1.0
    ];

    const indices = [
        0, 1, 2,
        0, 2, 3
    ];

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setIndex(indices);

    // compute vertex normals for lighting
    geometry.computeVertexNormals();

    return geometry;
}

export default createTriangleBufferGeometry;