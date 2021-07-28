<template>
  <el-menu router class="menu">
    <template v-for="menu of menus" :key="menu.title">
      <el-submenu v-if="menu.children" index="null">
        <template #title><i class="el-icon-menu menu-icon"></i><span>{{menu.title}}</span></template>
        <el-menu-item v-for="submenu of menu.children" :key="submenu.title" :index="submenu.path">{{submenu.title}}</el-menu-item>
      </el-submenu>
      <el-menu-item v-else :index="menu.path">
        <i class="el-icon-menu menu-icon"></i><span>{{menu.title}}</span>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { menuObj } from '@/router/workbenchRoutes';

const menus = menuObj.children;
</script>
<style lang="postcss" scoped>
.menu {
  height: 100%;
}

.menu-icon {
  /* 就是对不齐是吧 */
  transform: translateY(-2px);
}
</style>
