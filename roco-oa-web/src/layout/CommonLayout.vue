<template>
  <v-app class="text-grey-darken-3">
    <v-app-bar app></v-app-bar>

    <v-navigation-drawer app class="text-grey-darken-3">
      <the-menu></the-menu>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
         <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app></v-footer>
  </v-app>
</template>

<script lang="ts">
import TheMenu from '@/components/common/TheMenu.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { TheMenu },
  name: 'CommonLayout',
});
</script>
