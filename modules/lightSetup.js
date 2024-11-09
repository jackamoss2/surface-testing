import * as THREE from 'three';


function lightSetup() {
    const dirLight = new THREE.DirectionalLight(0xbfb58f, 1.0);
    dirLight.position.x += 50
    dirLight.position.y += 80
    dirLight.position.z += 40
    dirLight.castShadow = true
    dirLight.shadow.mapSize.width = 4096;
    dirLight.shadow.mapSize.height = 4096;
    const d = 25;
    dirLight.shadow.camera.left = - d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d; 
    dirLight.shadow.camera.bottom = - d;
    
    let target = new THREE.Object3D();
    dirLight.target = target;
    dirLight.target.updateMatrixWorld();
    
    dirLight.shadow.camera.lookAt(0, 0, -30);

    return dirLight;
}

export default lightSetup;