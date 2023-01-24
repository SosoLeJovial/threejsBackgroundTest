import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.set( 0, 0, 1 );
camera.lookAt( 0, 0, 0 );


const loader = new GLTFLoader();

loader.load( './dist/model3d/sonicOrmario/scene.gltf', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );
} );




const controls = new OrbitControls( camera, renderer.domElement );

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    camera.position.z = 100;
    camera.lookAt(0,0,0);
}
animate();


