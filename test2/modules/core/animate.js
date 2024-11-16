// doesn't

function animate(renderer, scene, camera) {
    function loop(scene, camera) {
        renderer.render(scene, camera);
    }; 

    renderer.setAnimationLoop(loop(scene, camera));
};

export default animate;