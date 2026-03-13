const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("container").appendChild(renderer.domElement);

camera.position.z = 5;


// Torus Geometry
const geometry = new THREE.TorusGeometry(2, 0.6, 16, 100);

const material = new THREE.MeshBasicMaterial({
color:0xff00ff,
wireframe:true
});

const torus = new THREE.Mesh(geometry, material);

scene.add(torus);


// Animation
function animate(){

requestAnimationFrame(animate);

torus.rotation.x += 0.01;
torus.rotation.y += 0.01;
torus.rotation.z += 0.01;

renderer.render(scene, camera);

}

animate();