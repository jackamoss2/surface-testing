import * as THREE from 'three';

function createSquareBufferGeometry() {
    // Define four vertices for a square in the XY plane
    const vertices = [
        0.0, 0.0, 0.0,   // Vertex 0: Bottom-left corner
        10.0, 0.0, 0.0,  // Vertex 1: Bottom-right corner
        10.0, 10.0, 0.0, // Vertex 2: Top-right corner
        0.0, 10.0, 0.0   // Vertex 3: Top-left corner
    ];

    // Define two triangles using indices to form a square
    const indices = [
        0, 1, 2,  // First triangle: Bottom-left, Bottom-right, Top-right
        0, 2, 3   // Second triangle: Bottom-left, Top-right, Top-left
    ];

    // Create the BufferGeometry and set the vertices and indices
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    // Rotate the square to stand up
    geometry.rotateX(Math.PI / 2);  // Rotate 90 degrees around the X-axis

    return geometry;
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create the square geometry and mesh
const geometry = createSquareBufferGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
const mesh = new THREE.Mesh(geometry, material);

// Add the mesh to the scene
scene.add(mesh);

// Position the camera and render the scene
camera.position.set(5, 5, 20);
camera.lookAt(0, 0, 0);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();