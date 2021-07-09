<template>
  <q-page class="flex flex-center" style="background: rgba(215, 215, 215, 1)">
    <transition
      appear
      enter-active-class="animated fadeInDownBig"
      leave-active-class="animated fadeOutDownBig absolutely"
    >
    <div class="box" v-if="loading">

    </div>
    </transition>
    <transition
      appear
      enter-active-class="animated animated fadeInDownBig absolutely"
      leave-active-class="animated animated fadeOutDownBig"
    >
    <div class="neomorph" v-if="!loading" id="neomorph">
      <div id="cardHeader" class="rubikFont text-h3 q-ma-md q-pa-sm bg-secondary _cardHeader">
        <q-avatar size="100px">
          <img :src="avatar" />
        </q-avatar>
        <span class="text-white text-weight-bolder">Jaxon Burningham</span>
      </div>
      <div class="q-gutter-y-md q-mt-sm" style="opacity: 0;transition: 1s all;" id="cardContent">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="about" label="About Me" />
            <q-tab name="experience" label="Experience/Education" />
            <q-tab name="resume" label="Resume" />
            <q-tab name="work" label="Relevant Work" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="about">
              <div class="text-h3 text-weight-medium"><span style="border-bottom: 1px solid rgba(185, 185, 185, 1);">About Me</span></div>
              <div style="display: grid; grid-template-columns: 2fr 1fr;" class="q-mt-sm">
              <div class="text-h6 text-weight-light"  style="line-height: 2em;">
                A little about me! I'm 19 years old and am currently enrolled at University of Utah for a major in computer science. I often spend my time working on side projects, gaming, or bouldering. I love seeing great design and finding cool things done in javascript.
                I am a constant learner and enjoy taking online courses from Udemy, CodeAcademy, and Pluralsight to further expand my knowledge and experience. I have worked on everything from social media web apps, to card trading livestream web apps.
                <br>
                 Feel free to contact me at <span class="text-blue-3 cursor-pointer">jaxonburn@gmail.com</span>
              </div>
                <q-img :src="profile" style="border-radius: 10px;">

                </q-img>
              </div>
            </q-tab-panel>

            <q-tab-panel name="experience">
              <TimeLine></TimeLine>
            </q-tab-panel>

            <q-tab-panel name="resume">
              <div class="flex flex-center q-pa-sm" style="min-height: 465px;">
                <a :href="downloadResume" download="JaxonBurninghamResume.pdf" target="_blank">
                  <q-btn label="My Resume" size="lg" push icon="far fa-file" color="primary" class="readFont">
                  </q-btn>
                </a>
              </div>
            </q-tab-panel>
            <q-tab-panel name="work">
              <div class="flex flex-center q-pa-sm" style="min-height: 465px;">

              </div>
            </q-tab-panel>
          </q-tab-panels>

        </q-card>
      </div>
    </div>
    </transition>
  </q-page>
</template>

<script>
  import LottieAnimation from 'lottie-web-vue';
  import mainAvatar from '../assets/portfoliopic.png';
  import TimeLine from 'components/TimeLine';
  import profilePicture from '../assets/PersonalPic.jpeg';
  import Resume from '../assets/Resume.pdf';

export default {
  name: 'PageIndex',
  components: {
    TimeLine,
    LottieAnimation
  },
  mounted(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 4600)
    setTimeout(() => {
      let neomorph = document.getElementById('neomorph');
      neomorph.classList.add('finalForm');
      let header = document.getElementById('cardHeader');
      header.style.opacity = '1';
      let content = document.getElementById('cardContent');
      content.style.opacity = '1';
    }, 7700)
  },
  data(){
    return {
      downloadResume: Resume,
      loading: 'notLoading',
      avatar: mainAvatar,
      profile: profilePicture,
      doneLoading: false,
      tab: 'about'
    }
  }
}
</script>


<style scoped>
  ._cardHeader {
    border-radius: 15px;opacity: 0;
    transition: 0.7s all;
  }

  .absolutely {
    position: absolute;
  }

  .box {
    position: relative;
    background: linear-gradient(#2F80ED, #B2FFDA);
    border: 0.20rem solid rgba(210, 210, 210, 0.8);
    height: 10rem;
    width: 10rem;
    outline: 0;
    overflow: hidden;
  }

  .box::before {
    content: "JB";
    font-weight: 800;
    font-size: 3rem;
    color: white;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .box::after {
    content: "";
    position: absolute;
    bottom: -15%;
    left: -50%;
    height: 200%;
    width: 200%;
    background: var(--background);
    border-radius: 42%;
    animation: spin 4.5s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: translateY(0) rotate(0deg);
    }
    100% {
      transform: translateY(-100%) rotate(500deg);
    }
  }

  .neomorph {
    border-radius: 20px;
    width: 60px;
    height: 60px;
    background: #f0f0f0;
    box-shadow:  0 0 0 #cccccc,
    0 0 0 #ffffff,
    10px 10px 10px #cccccc inset,
    -10px -10px 10px #ffffff inset;
    animation: anime 3s cubic-bezier(0.16, 1, 0.3, 1) 1s;
    z-index: 2;
    /* animation-fill-mode: forwards; */
  }

  .finalForm {
    width: 85vw;
    height: 75vh;
    background: #fafafa;
    box-shadow: 40px 40px 40px #cccccc,
    0 0 0 #ffffff,
    0 0 0 #cccccc inset,
    2px 2px 2px #ffffff inset;
    animation: hovering 6s ease-in-out infinite alternate;
  }

  @keyframes hovering {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
    100% {
      transform: translateY(8px);
    }
  }

  @keyframes anime {
    0% {
      width: 60px;
      height: 60px;
      background: #f0f0f0;
      box-shadow: 0 0 0 #cccccc,
      0 0 0 #ffffff,
      10px 10px 10px #cccccc inset,
      -10px -10px 10px #ffffff inset;
    }
    25% {
      width: 60px;
      height: 60px;
      background: #f8f8f8;
      box-shadow: 10px 10px 10px #cccccc,
      10px 10px 10px #ffffff,
      0 0 0 #cccccc inset,
      0 0 0 #ffffff inset;
    }
    50% {
      width: 60px;
      height: 240px;
      background: #f8f8f8;
      box-shadow: 10px 10px 10px #cccccc,
      10px 10px 10px #ffffff,
      0 0 0 #cccccc inset,
      0 0 0 #ffffff inset;
    }
    100% {
      width: 85vw;
      height: 75vh;
      background: #fafafa;
      box-shadow: 40px 40px 40px #cccccc,
      0 0 0 #ffffff,
      0 0 0 #cccccc inset,
      2px 2px 2px #ffffff inset;
    }
  }
</style>
