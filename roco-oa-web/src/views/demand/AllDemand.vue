<template>
  <div class="wrapper">
    <demand-card v-for="demand of demandList" :key="demand.demandId" :demand="demand" class="demand-card"></demand-card>
  </div>
</template>

<script lang="ts" setup>
import demand from '@/composables/demandComposable';
import DemandCard from '@/views/demand/components/DemandCard.vue';

const { demandList } = demand();
</script>

<style lang="postcss" scoped>
.wrapper {
  display: flex;
}

.demand-card {
  margin: 0 20px 20px 0;
}
</style>
