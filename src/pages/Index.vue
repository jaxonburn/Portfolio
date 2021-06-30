<template>
  <q-page class="flex flex-center" style="background: rgba(230, 230, 230, 1)">
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
    <div class="neomorph" v-if="!loading">

    </div>
    </transition>
  </q-page>
</template>

<script>
  import LottieAnimation from 'lottie-web-vue';
export default {
  name: 'PageIndex',
  components: {
    LottieAnimation
  },
  mounted(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 5500)
    setTimeout(() => {
      let neomorph = document.querySelector('.neomorph');
      neomorph.classList.add('finalForm');
    }, 8500)
  },
  data(){
    return {
      loading: 'notLoading',
    }
  }
}
</script>


<style scoped>

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
    bottom: -50%;
    left: -50%;
    height: 200%;
    width: 200%;
    background: var(--background);
    border-radius: 42%;
    animation: spin 5.5s ease-in-out infinite;
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
    /* animation-fill-mode: forwards; */
  }

  .finalForm {
    width: 70vw;
    height: 55vh;
    background: #fafafa;
    box-shadow: 40px 40px 40px #cccccc,
    0 0 0 #ffffff,
    0 0 0 #cccccc inset,
    2px 2px 2px #ffffff inset;
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
      width: 70vw;
      height: 55vh;
      background: #fafafa;
      box-shadow: 40px 40px 40px #cccccc,
      0 0 0 #ffffff,
      0 0 0 #cccccc inset,
      2px 2px 2px #ffffff inset;
    }
  }
</style>
