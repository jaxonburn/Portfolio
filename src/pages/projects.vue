<template>
  <q-page>
    <canvas id="bg"></canvas>
  </q-page>
</template>

<script>
  import * as THREE from 'three';

  import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
  import SpaceTexture from '../assets/space.jpg';
  import JaxonImage from '../assets/PersonalPic.jpeg';
  import MoonImage from '../assets/moon.jpeg';
  import NormalImage from '../assets/normalImage.jpeg';

  export default {
    name: 'projects',
    data(){
      return {
        scene: null,
        camera: null,
        renderer: null,
        geometry: null,
        material: null,
        torus: null,
        pointLight: null,
        ambientLight: null,
        lightHelper: null,
        gridHelper: null,
        controls: null,
        spaceTexture: SpaceTexture,
        jaxonImage: JaxonImage,
        moonImage: MoonImage,
        normal: NormalImage,
        moon: null,
        jaxon: null,
      }
    },
    mounted(){
      this.init();
    },
    methods: {
      init(){
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        this.renderer = new THREE.WebGLRenderer({
          canvas: document.querySelector('#bg'),
        });

        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.position.setZ(30);

        this.renderer.render(this.scene, this.camera);


        this.geometry = new THREE.TorusGeometry(10, 3, 16, 100);

        this.material = new THREE.MeshStandardMaterial({color: 0xFF6347});

        this.torus = new THREE.Mesh(this.geometry, this.material);

        this.scene.add(this.torus);

        this.pointLight = new THREE.PointLight(0xffffff);
        this.pointLight.position.set(20, 20, 20);

        this.ambientLight = new THREE.AmbientLight(0xffffff);
        this.scene.add(this.pointLight, this.ambientLight);

        this.lightHelper = new THREE.PointLightHelper(this.pointLight);
        this.gridHelper = new THREE.GridHelper(200, 50);
        this.scene.add(this.lightHelper, this.gridHelper);

        this.scene.add(this.pointLight);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        Array(200).fill().forEach(this.addStar);

        const spaceTexture = new THREE.TextureLoader().load(this.spaceTexture);

        this.scene.background = spaceTexture;


        const jaxonTexture = new THREE.TextureLoader().load(this.jaxonImage);

        this.jaxon = new THREE.Mesh(
          new THREE.BoxGeometry(3, 3, 3),
          new THREE.MeshBasicMaterial({map: jaxonTexture})
        );

        this.scene.add(this.jaxon);

        const moonTexture = new THREE.TextureLoader().load(this.moonImage);
        const normalTexture = new THREE.TextureLoader().load(this.normal);

        this.moon = new THREE.Mesh(
          new THREE.SphereGeometry(3, 32, 32),
          new THREE.MeshStandardMaterial({
            map: moonTexture,
            normalMap: normalTexture
          })
        );

        this.scene.add(this.moon);

        this.moon.position.z = 30;
        this.moon.position.setX(-10);

        document.body.onscroll = this.moveCamera;

        this.animate();
      },
      moveCamera(){
        const t = document.body.getBoundingClientRect().top;
        this.moon.rotation.x += 0.05;
        this.moon.rotation.y += 0.075;
        this.moon.rotation.z += 0.05;

        this.jaxon.rotation.y += 0.01;
        this.jaxon.rotation.z += 0.01;

        this.camera.position.z = t * -0.01;
        this.camera.position.x = t * -0.0002;
        this.camera.position.y = t * -0.0002;
      },
      animate(){
        requestAnimationFrame(this.animate);

        this.torus.rotation.x += 0.01;
        this.torus.rotation.y += 0.005;
        this.torus.rotation.z += 0.01;

        this.controls.update();

        this.renderer.render(this.scene, this.camera);
      },
      addStar(){
        const geometry = new THREE.SphereGeometry(0.25, 24, 24);
        const material = new THREE.MeshStandardMaterial({color: 0xffffff});
        const star = new THREE.Mesh( geometry, material);

        const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

        star.position.set(x, y, z);
        this.scene.add(star);
      }
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


  main {
    width: 100vw;
    color: white;
    z-index: 99;
    position: absolute;
    width: 100%;
    margin: 0px auto;
    padding: 120px 0px;

    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  h1, h2, h3, blockquote {
    font-family: elevon, sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  canvas {
    position: fixed;
    top: 0;
    left: 0;
  }



  header {
    background: var(--dark-bg);
    grid-column: 2 / span 5;
    font-size: 2.5rem;
    padding: 2rem;
    margin-bottom: var(--spacing);
  }

  section {
    grid-column: 2 / 8;
    padding: 1rem;
    background: var(--dark-bg);
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: var(--spacing);
  }

  blockquote {
    margin: 0;
    padding: 0;
    grid-column: 2 / span 9;
    margin-bottom: var(--spacing);
  }

  blockquote p {
    color: black;
    background-color: white;
    font-size: 4rem;
    display: inline;
    line-height: 1;
  }

  .left {
    grid-column: 6 / 12;
  }

</style>
