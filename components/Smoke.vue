<template>
  <div class="smoke">
    <div ref="canvas" />
  </div>
</template>

<script>
import * as THREE from 'three';
import debounce from 'debounce';
import logo from '~/assets/images/valice.svg';
import smokeImg from '~/assets/images/smoke.png';

export default {
  data() {
    return {
      // removed due to known issue with Three.js and Vue3 reactivity
      // geometry: '',
      // camera: null,
      // scene: null,
      // renderer: null,
      // material: null,
      // mesh: null,
      // canvasDOM: null,
      onResizeDebounced: debounce(this.onResize, 800),
    };
  },
  mounted() {
    this.init();
    this.animate();
    window.addEventListener('resize', this.onResizeDebounced);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResizeDebounced);
  },
  methods: {
    onResize() {
      this.$refs.canvas.parentNode.removeChild(this.renderer.domElement);
      this.init();
      this.animate();
    },
    init() {
      this.clock = new THREE.Clock();
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.scene = new THREE.Scene();
      this.addCamera();
      this.addText();
      this.addSmoke();
      this.$refs.canvas.parentNode.appendChild(this.renderer.domElement);
    },
    addCamera() {
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );
      this.camera.position.z = 1000;
      this.scene.add(this.camera);
    },
    addText() {
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshLambertMaterial({
        color: 0xaa6666,
        wireframe: false,
      });

      this.mesh = new THREE.Mesh(geometry, material);

      const imgWidth = window.matchMedia('(max-width: 767px)').matches ? 120 : 250;
      const imgHeight = window.matchMedia('(max-width: 767px)').matches ? 36 : 74;

      const textGeo = new THREE.PlaneGeometry(imgWidth, imgHeight);
      THREE.ImageUtils.crossOrigin = ''; // Need this to pull in crossdomain images from AWS
      const textTexture = new THREE.TextureLoader().load(logo);

      const textMaterial = new THREE.MeshLambertMaterial({
        color: 0x00ffff,
        opacity: 1,
        map: textTexture,
        transparent: true,
        blending: THREE.AdditiveBlending,
      });
      const text = new THREE.Mesh(textGeo, textMaterial);
      text.position.z = 850;
      text.position.y = 20;
      this.scene.add(text);
      this.light = new THREE.DirectionalLight(0xffffff, 0.8);
      this.light.position.set(-1, 0, 1);
      this.scene.add(this.light);
    },
    addSmoke() {
      this.smokeTexture = new THREE.TextureLoader().load(smokeImg);
      this.smokeMaterial = new THREE.MeshLambertMaterial({
        color: 0x00dddd,
        map: this.smokeTexture,
        transparent: true,
      });
      this.smokeGeo = new THREE.PlaneGeometry(300, 300);
      this.smokeParticles = [];

      for (let p = 0; p < 150; p++) {
        this.particle = new THREE.Mesh(this.smokeGeo, this.smokeMaterial);
        this.particle.position.set(
          Math.random() * 500 - 250,
          Math.random() * 500 - 250,
          Math.random() * 1000 - 100
        );
        this.particle.rotation.z = Math.random() * 360;
        this.scene.add(this.particle);
        this.smokeParticles.push(this.particle);
      }
    },
    render() {
      this.mesh.rotation.x += 0.005;
      this.mesh.rotation.y += 0.01;
      this.cubeSineDriver += 0.01;
      this.mesh.position.z = 100 + Math.sin(this.cubeSineDriver) * 500;
      this.renderer.render(this.scene, this.camera);
    },
    animate() {
      this.delta = this.clock.getDelta();
      requestAnimationFrame(this.animate);
      this.evolveSmoke();
      this.render();
    },
    evolveSmoke() {
      this.sp = this.smokeParticles.length;
      while (this.sp--) {
        this.smokeParticles[this.sp].rotation.z += this.delta * 0.12;
      }
    },
  },
};
</script>

<style lang="scss">
.smoke {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}
</style>
