const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
const cube = new THREE.Mesh( geometry, material );
const light = new THREE.AmbientLight( 0x404040 , 2); // soft white light




const light1 = new THREE.PointLight( 0xffffff, 1, 100 );
light1.position.set( 0, 5, 0 );
scene.add( light1 );

scene.add( light );
scene.add( cube );

camera.position.z = 5;

cube.rotation.x = 35;


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    cube.rotation.z += 0.005;

    cube.position.y = Math.sin(cube.rotation.y);
}
animate();