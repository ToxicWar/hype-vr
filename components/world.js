import config from '../config.yml';


export default {
  init() {
    const size = config.world.size;
    const plane = document.createElement('a-plane');
    const scene = this.el.sceneEl;

    plane.setAttribute('width', size.width);
    plane.setAttribute('height', size.depth);
    plane.setAttribute('position', {
      x: Math.floor(size.width / 2),
      y: 0,
      z: Math.floor(size.depth / 2),
    });
    plane.setAttribute('material', {
      shader: 'flat',
    });

    plane.setAttribute('rotation', {
      x: -90,
      y: 0,
      z: 0,
    });

    plane.setAttribute('color', '#000');

    scene.appendChild(plane);
  },
};