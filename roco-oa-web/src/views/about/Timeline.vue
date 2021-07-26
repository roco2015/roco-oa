<template>
  <v-timeline class="text-info">
    <v-timeline-item v-for="item of timelineData" :key="item.id" color="pink">
      <template #opposite>
        <span>{{item.time}}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-text>{{item.text}}</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script lang="ts" setup>
const timelineData = [
  { id: 4, time: '2021-07-26', text: 'node服务器搭建' },
  { id: 3, time: '2021-07-02', text: '初始化路由，菜单' },
  { id: 2, time: '2021-07-01', text: '安装vuetify' },
  { id: 1, time: '2021-06-30', text: '初始化项目' },
];
</script>

<style lang="postcss" scoped></style>
