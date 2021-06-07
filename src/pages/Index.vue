<template>
  <q-page class="flex flex-center" style="overflow: hidden;height: 80vh;">
    <div>
    <lottie-animation
      ref="loadingAnim"
      :auto-play="true"
      :loop="true"
      :animationData="require('assets/LottieAnims/blob.json')"
      :style="$q.screen.lt.sm ? 'height: 300px;width: 300px;' : 'height: 800px; width: 800px;'"
    >
    </lottie-animation>
    </div>
  </q-page>
</template>

<script>
  import LottieAnimation from 'lottie-web-vue';
export default {
  name: 'PageIndex',
  components: {
    LottieAnimation
  }
}
</script>
