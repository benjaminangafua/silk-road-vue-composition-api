<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeadTop from './components/HeadTop.vue'
</script>

<template>
  <div class="container">

  <HeadTop/>
  <RouterView />
  </div>
</template>
