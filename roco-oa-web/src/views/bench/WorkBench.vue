<template>
  <el-container>
    <el-header>
      <the-header></the-header>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import TheHeader from '@/components/common/TheHeader.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WorkBench',
  components: {
    TheHeader,
  },
  setup() {

  },
});
</script>

<style lang="postcss" scoped>
</style>
