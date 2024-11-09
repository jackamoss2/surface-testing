import * as THREE from 'three';

function createTriangleBufferGeometry() {
    // Sample vertices and indices
    const vertices = [
        0.0, 0.0, 0.0,   // Point 1: (0, 0, 0)
        10.0, 0.0, 0.0,  // Point 2: (10, 0, 0)
        0.0, 10.0, 0.0   // Point 3: (0, 10, 0)
    ];

    const indices = [
        0, 1, 2  // Triangle using vertices 0, 1, and 2
    ];

    // Create a new BufferGeometry
    const geometry = new THREE.BufferGeometry();

    // Set the vertices array
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    // Set the indices array
    geometry.setIndex(indices);

    // Compute vertex normals for correct lighting
    geometry.computeVertexNormals();

    return geometry;
}

export default createTriangleBufferGeometry;