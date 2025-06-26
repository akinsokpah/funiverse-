// scripts/main.js
const canvas = document.getElementById("bgCanvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// Add a spinning 3D object
const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
const material = new THREE.MeshStandardMaterial({ color: 0xff69b4 });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// Lighting
const light = new THREE.PointLight(0xffffff);
light.position.set(5, 5, 5);
scene.add(light);

// Animation
function animate() {
  requestAnimationFrame(animate);
  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();￼Enter
