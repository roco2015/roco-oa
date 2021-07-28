<template>
  <el-container class="container">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <the-menu></the-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import TheMenu from '@/components/common/TheMenu.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { TheMenu },
  name: 'CommonLayout',
});
</script>
<style lang="postcss" scoped>
.container {
  height: 100vh;
}
</style>
