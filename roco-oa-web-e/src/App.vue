<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import messageQueue from '@/composables/messageQueueComposable';

messageQueue();
</script>

<style>
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
