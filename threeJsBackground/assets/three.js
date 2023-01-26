import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader }   from 'three/addons/loaders/GLTFLoader.js';


// Set Up Camera/Scene/renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize( window.innerWidth, window.innerHeight );
camera.lookAt( 0, 0, 0 );


// Star to the scene
function addStar() {
    const geometry = new THREE.SphereGeometry(0.30, 24, 24);
    const material = new THREE.MeshToonMaterial({color: 0xffffff});
    const star = new THREE.Mesh(geometry, material);
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 500 ));
    star.position.set(x,y,z);
    scene.add(star);
}
Array(1500).fill().forEach(addStar);


// Background
const spaceTexture = new THREE.TextureLoader().load('universe.jpg');
scene.background = spaceTexture;

// Light
const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.set(30,30,30);
const ambiantLight = new THREE.AmbientLight(0xC0C0C0);
scene.add(pointLight, ambiantLight)


//controls
const controls = new OrbitControls( camera, renderer.domElement );

//animate
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    renderer.setSize( window.innerWidth, window.innerHeight );
    camera.position.z = 30;
    camera.lookAt(0,0,0);
    controls.update();
}
animate();


