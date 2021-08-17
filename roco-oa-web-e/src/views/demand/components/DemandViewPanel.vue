<template>
  <demand-view-card v-for="demand of (props.demands as any)" :key="demand.demandId" :demand="demand"></demand-view-card>
</template>

<script lang="ts" setup>
import DemandViewCard from '@/views/demand/components/DemandViewCard.vue';

const props = defineProps({
  demands: {
    type: Array,
  },
});

</script>

<style lang="postcss" scoped>

</style>
