<template>
  <div>
    {{demandList}}
    <demand-card></demand-card>
  </div>
</template>

<script lang="ts" setup>
import demand from '@/composables/demandComposable';
import DemandCard from '@/views/demand/components/DemandCard.vue';

const { demandList } = demand();
</script>

<style lang="postcss" scoped></style>
