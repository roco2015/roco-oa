<template>
  <v-app class="text-grey-darken-3">
    <v-app-bar app></v-app-bar>

    <v-navigation-drawer app class="text-grey-darken-3">
      <the-menu></the-menu>
    </v-navigation-drawer>

    <v-main class="main">
      <v-container fluid>
         <router-view></router-view>
      </v-container>
      <v-footer app fixed bottom right left>
        <the-footer></the-footer>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import TheMenu from '@/components/common/TheMenu.vue';
import TheFooter from '@/components/common/TheFooter.vue';
</script>
<style lang="postcss" scoped>
.main {
  background: #f2f5f8;
}
</style>
