var scene = new THREE.Scene(); // sets up scene
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000); // creates perspective
// field of view, aspect ratio, near clipping then far clipping

var renderer = new THREE.WebGLRenderer(); // creates renderer -> defaults to webgl
renderer.setSize( window.innerWidth, window.innerHeight); // if resource intensive set to smaller
document.body.appendChild( renderer.domElement); //adds the renderer to the html

var geometry = new THREE.BoxGeometry(1, 1, 1); // contains the vertices and faces of the cube
var material = new THREE.MeshBasicMaterial({color: 0x00ff00}); // "colors" the cube with a material
var cube = new THREE.Mesh( geometry, material); // a mesh takes a geometry and adds a material to it
scene.add( cube ); // adds to the coordinates at (0,0,0)

camera.position.z = 5; // moves camera up so above the cube


/**
*Render loop
**/
function render(){
  requestAnimationFrame(render);
  renderer.render( scene, camera);
}
render();
