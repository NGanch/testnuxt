<!-- App.vue -->

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

/* <script>
export default {
  name: 'App'
}
</script>

<style>
/* Ваші стилі тут */
</style>
*/


<script setup>
useHead({
  title: 'Advertising Data',
  meta: [
    { name: 'description', content: 'Unlock the power of data!' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
  ],
})
</script>

<style>
  * {
    font-family: 'Ubuntu', sans-serif;
  }

  h1 {
    font-size: 48px;
    font-weight: 700;
  }
  h2 {
    font-size: 28px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 52px;
      font-weight: 700;
    }
    h2 {
      font-size: 36px;
      font-weight: 700;
    }
  }
</style>
