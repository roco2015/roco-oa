<template>
  <div>{{demandList}}</div>
</template>

<script lang="ts" setup>
import demand from '@/composables/demandComposable';

const { demandList } = demand();
</script>

<style lang="postcss" scoped></style>
