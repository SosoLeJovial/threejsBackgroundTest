import * as THREE from 'three';
import { PointLight } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader }   from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
});
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize( window.innerWidth, window.innerHeight );

camera.position.set( 0, 0, 10 );
camera.lookAt( 0, 0, 0 );


function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({color: 0xffffff});
    const star = new THREE.Mesh(geometry, material);
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ));
    star.position.set(x,y,z);
    scene.add(star);
}
Array(400).fill().forEach(addStar);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20,20,20);
const ambiantLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambiantLight)

const controls = new OrbitControls( camera, renderer.domElement );

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    camera.position.z = 30;
    camera.lookAt(0,0,0);
    controls.update();
}
animate();


