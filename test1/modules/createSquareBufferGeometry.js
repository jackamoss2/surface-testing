import * as THREE from 'three';

function createSquareBufferGeometry() {
    // Define four vertices to form a square in the XY plane
    const vertices = [
        0.0, 0.0, 0.0,   // Vertex 0: Bottom-left corner
        10.0, 0.0, 0.0,  // Vertex 1: Bottom-right corner
        10.0, 10.0, 0.0, // Vertex 2: Top-right corner
        0.0, 10.0, 0.0   // Vertex 3: Top-left corner
    ];

    // Define two triangles using indices
    const indices = [
        0, 1, 2,  // First triangle: Bottom-left, Bottom-right, Top-right
        0, 2, 3   // Second triangle: Bottom-left, Top-right, Top-left
    ];

    // Create BufferGeometry and set position and index attributes
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    return geometry;
}

export default createSquareBufferGeometry;