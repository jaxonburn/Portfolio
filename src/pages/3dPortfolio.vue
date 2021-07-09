<template>
  <q-page>
      <canvas id="bg"></canvas>
  </q-page>
</template>

<script>
  import * as THREE from 'three';
  import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

  export default {

    name: 'portfolioPage',
    data(){
      return {
        scene: null,
        camera: null,
        renderer: null,
        controls: null,
      }
    },
    mounted(){
      this.init();
    },
    methods: {
      init(){
        let group;
        group = new THREE.Group();
        group.position.y = 100;

        THREE.Cache.enabled = true;
        this.scene = new THREE.Scene();
        // this.scene.background = new THREE.Color( 0xe0e0e0 );

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        this.renderer = new THREE.WebGLRenderer({
          canvas: document.querySelector('#bg'),
        });

        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.position.setZ(5);

        this.renderer.render(this.scene, this.camera);

        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
        const cube = new THREE.Mesh( geometry, material );


        this.scene.add( cube );
        this.scene.add( group );

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.animate();
      },
      animate(){
        requestAnimationFrame(this.animate);


        this.controls.update();

        this.renderer.render(this.scene, this.camera);
      },
    }
  };
</script>

<style scoped>
  canvas {
    position: fixed;
    top: 0;
    left: 0;
  }

  :root {
    --dark-bg: rgba(15, 15, 15, 0.95);
    --spacing: 350px;

    font-family: brandon-grotesque, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
</style>
