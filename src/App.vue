<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');

  :root {
    --background: #f8f8f8;
    --dark: #303032;
  }


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--background);
  }

  .rubikFont {
    font-family: 'Rubik', sans-serif;
  }

  a {
    color: black;
    text-decoration: none;
  }
</style>
