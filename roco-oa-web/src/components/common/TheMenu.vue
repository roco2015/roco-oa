<template>
  <v-list dense nav>
    <template v-for="menu in menus" :key="menu.title">
      <v-list-item v-if="!menu.children" @click="goToPage(menu.name)">
        <v-list-item-header><v-icon v-if="menu.children">mdi-folder-open-outline</v-icon></v-list-item-header>
        <v-list-item-title>{{menu.title}}</v-list-item-title>
      </v-list-item>

      <template v-else>
        <v-list-item color="info">
          <v-list-item-header><v-icon v-if="menu.children">mdi-folder-open-outline</v-icon></v-list-item-header>
          <v-list-item-title>{{menu.title}}</v-list-item-title>
        </v-list-item>
        <v-list-item v-for="subMenu of menu.children" :key="subMenu.title"
          :active="isCurrent(subMenu.name)" @click="goToPage(subMenu.name)">
          <v-list-item-header></v-list-item-header>
          <v-list-item-title>{{subMenu.title}}</v-list-item-title>
        </v-list-item>
      </template>
      <v-divider></v-divider>
    </template>
  </v-list>

  <!-- <v-list>
    <v-list-group v-for="menu in menus" :key="menu.title" v-model="menu.active">
      <template #activator>
        <v-list-item-content>
          <v-list-item-title>{{menu.title}}0</v-list-item-title>
        </v-list-item-content>
      </template>
      <v-list-item v-for="subMenu in menu.children" :key="subMenu.title">
        <v-list-item-content>
          <v-list-item-title>{{subMenu.title}}1</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list-group>
  </v-list> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { menuObj } from '@/router/workbenchRoutes';
import { toPage, isEqualToCurrentRoute } from '@/utils/route';

export default defineComponent({
  name: 'TheMenu',
  setup() {
    const menus = menuObj.children;
    const goToPage = (name) => toPage({ name });
    const isCurrent = (name) => isEqualToCurrentRoute({ name });
    return {
      menus,
      goToPage,
      isCurrent,
    };
  },
});
</script>
