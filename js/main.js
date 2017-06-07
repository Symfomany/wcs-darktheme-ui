// Let/const
const name = 'Bob';



let time = 'yesterday';
time = 'today';

// Template string
console.log(`Hello ${name}, how are you ${time}?`);

const bob = {
  // Object shorthand
  name,
  // Object method
  sayMyName() {
    console.log(this.name);
  }
};

// Classes
class SkinnedMesh {
  update(camera=createCamera()) {
    this.camera = camera;
  }

  set name(geometry) {
    this.geometry = geometry;
  }

  get name() {
    return this.geometry;
  }
}

// Commonjs
import lebab from 'lebab';

export default SkinnedMesh;

// Arrow functions
const render = () => {
  // ...
  requestAnimationFrame(render);
};
