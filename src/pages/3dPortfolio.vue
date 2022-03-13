<template>
  <q-page>
      <canvas id="bg"></canvas>
<!--    <q-page-sticky position="bottom-left" :offset="[40, 40]">-->
<!--      <q-btn fab :icon="play ? 'fas fa-pause' : 'fas fa-play'" color="red" @click="playMusic()" size="lg"/>-->
<!--    </q-page-sticky>-->
  </q-page>
</template>

<script>
  import * as THREE from 'three';
  import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import { InteractionManager } from "three.interactive";
  import TWEEN from '@tweenjs/tween.js';

  export default {

    name: 'portfolioPage',
    data(){
      return {
        scene: null,
        camera: null,
        renderer: null,
        controls: null,
        gltfLoader: null,
        interactionManager: null,
        music: null,
        play: false,
        beginMovement: false,
        mouseClick: null,
        mouseClicked: false,
        presentedText: null,
        javascriptText: null,
      }
    },
    mounted(){
      this.music = new Audio('sounds/song.mp3');
      this.mouseClick = new Audio('sounds/MouseClick.mp3');
      this.init();
      window.addEventListener( 'resize', this.onWindowResize, false );
    },
    methods: {
      onWindowResize(){
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
      },
      playMusic(){
        if(this.play){
          this.music.pause();
        }else {
          this.music.play();
        }
        this.play = !this.play;
      },
      animate(){
        requestAnimationFrame(this.animate);
        TWEEN.update();
        // this.controls.update();
        this.interactionManager.update();
        this.renderer.render(this.scene, this.camera);


        if(this.beginMovement){

          this.camera.translateZ(-1);
        };
      },
      init(){

        this.velocity = new THREE.Vector3();
        this.prevTime = performance.now();

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.CubeTextureLoader()
        .setPath('/SpaceTutorial').load([
            '/front.png',
            '/back.png',
            '/top.png',
            '/bottom.png',
            '/left.png',
            '/right.png'
          ]);

        this.renderer = new THREE.WebGLRenderer({
          canvas: document.querySelector('#bg'),
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.camera = new THREE.PerspectiveCamera(52, window.innerWidth/window.innerHeight, 1, 5000);
        this.camera.position.set(0, 20, 300);
        // this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        let ambientLight = new THREE.AmbientLight(0xaaaaaa);
        ambientLight.intensity = 1.3;
        this.scene.add(ambientLight);

        const textureLoader = new THREE.TextureLoader();


        let fontLoader = new THREE.FontLoader();

        let that = this;

        fontLoader.load('/AlfaSlab.json', function(font) {

          let geometrySetting = {
            font: font,
            size: 30,
            height: 5,
          };
          let textGeoGame = new THREE.TextGeometry('penis', geometrySetting);
          let textGeoJavascript = new THREE.TextGeometry('stuff ', geometrySetting);

          let textMatGame = new THREE.MeshLambertMaterial({color: 0xcccccc});
          let textMatJavascript = new THREE.MeshLambertMaterial({color: 0xcccccc});


          that.presentedText = new THREE.Mesh(textGeoGame, textMatGame);
          that.javascriptText = new THREE.Mesh(textGeoJavascript, textMatJavascript);

          that.presentedText.position.set(-250, 120, -650);
          that.javascriptText.position.set(-350, 120, -1150);

          that.presentedText.material.transparent = true;
          that.javascriptText.material.transparent = true;


          that.presentedText.material.opacity = 0;
          that.javascriptText.material.opacity = 0;

          that.scene.add(that.presentedText);
          that.scene.add(that.javascriptText);
        });

        this.interactionManager = new InteractionManager(
          this.renderer,
          this.camera,
          this.renderer.domElement
        )

        const woodAmbient = textureLoader.load('textures/wood/WoodAmbient.jpg');
        const woodBase = textureLoader.load('textures/wood/WoodBase.jpg');
        const woodHeight = textureLoader.load('textures/wood/WoodHeight.png');
        const woodNormal = textureLoader.load('textures/wood/WoodNormal.jpg');
        const woodRough = textureLoader.load('textures/wood/WoodRough.jpg');

        const deskGeometry = new THREE.BoxGeometry(500, 10, 200, 100, 100);
        const deskMaterial = new THREE.MeshStandardMaterial(
          {
            map: woodBase,
            normalMap: woodNormal,
            displacementMap: woodHeight,
            roughnessMap: woodRough,
            aoMap: woodAmbient
          }
        );
        const desk = new THREE.Mesh(deskGeometry, deskMaterial);
        desk.geometry.attributes.uv2 = desk.geometry.attributes.uv;
        desk.position.set(0, -85, 10);
        this.scene.add(desk);

        const plasterAmbient = textureLoader.load('textures/plaster/PlasterAmbient.jpg');
        const plasterBase = textureLoader.load('textures/plaster/PlasterBase.jpg');
        const plasterHeight = textureLoader.load('textures/plaster/PlasterHeight.png');
        const plasterNormal = textureLoader.load('textures/plaster/PlasterNormal.jpg');
        const plasterRough = textureLoader.load('textures/plaster/PlasterRough.jpg');

        const wallGeometry = new THREE.BoxGeometry(1500, 1000, 1, 1024, 1024);
        const wallMaterial = new THREE.MeshStandardMaterial(
          {
              map: plasterBase,
              normalMap: plasterNormal,
              displacementMap: plasterHeight,
              displacementScale: 1,
              roughnessMap: plasterRough,
              aoMap: plasterAmbient,
              aoMapIntensity: 0.5
          }
        );
        const wall = new THREE.Mesh(wallGeometry, wallMaterial);
        wall.geometry.attributes.uv2 = wall.geometry.attributes.uv;
        wall.position.set(0, -150, -80);
        this.scene.add(wall);

        this.gltfLoader = new GLTFLoader();

        this.gltfLoader.load('desktop_computer/scene.gltf', function (model){
          let computer = model.scene.children[0];
          computer.scale.set(130, 130, 130);
          computer.position.set(0, 0, 0);
          that.scene.add(model.scene);

          let objectsHover = [];

          model.scene.traverse((child) => {
            if(child.children.length === 0){

              that.interactionManager.add(child);

              child.addEventListener('mousedown', (event) => {
                event.stopPropagation();
                if(event.target.name === 'defaultMaterial_1' || event.target.name === 'defaultMaterial'){

                  if(!that.mouseClicked){
                    that.mouseClicked = true;
                    that.mouseClick.play();
                    // presented by animation
                    let textOpacityTween = new TWEEN.Tween(that.presentedText.material).to({opacity: 1}, 1300)
                    let textPositionTween = new TWEEN.Tween(that.presentedText.position).to({y: 20}, 1300)

                    textPositionTween.delay(7000);
                    textOpacityTween.delay(7000);

                    let textOpacityTween2 = new TWEEN.Tween(that.javascriptText.material).to({opacity: 1}, 1300)
                    let textPositionTween2 = new TWEEN.Tween(that.javascriptText.position).to({y: 20}, 1300)

                    textPositionTween2.delay(16000);
                    textOpacityTween2.delay(16000);

                    textPositionTween.start();
                    textOpacityTween.start();

                    textPositionTween2.start();
                    textOpacityTween2.start();
                    setTimeout(() => {
                      that.beginMovement = true;
                      that.playMusic();
                    }, 375);
                  }

                }
              })

              child.addEventListener('mouseover', (event) => {

                event.stopPropagation();
                if (!objectsHover.includes(event.target))
                  objectsHover.push(event.target);
                if(event.target.name === 'defaultMaterial_1' || event.target.name === 'defaultMaterial'){
                  document.body.style.cursor = 'pointer';
                }

              });

              child.addEventListener('mouseout', (event) => {
                event.stopPropagation();
                if(event.target.name === 'defaultMaterial_1' || event.target.name === 'defaultMaterial'){
                  document.body.style.cursor = 'default';
                }
              });



            }
          })

        });
        const spotLight = new THREE.SpotLight( 0xffffff );
        spotLight.position.set( 100, 50,  50 );
        spotLight.angle = Math.PI / 11;

        this.scene.add(spotLight);
        spotLight.target.position.x = 107;
        spotLight.target.position.z = 40;
        this.scene.add(spotLight.target);

        // const spotLightHelper = new THREE.SpotLightHelper( spotLight );
        // this.scene.add(spotLightHelper);
        this.animate();
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
</style>
