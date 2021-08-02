<template>
  <demand-op-bar @refresh="refresh"></demand-op-bar>
  <div class="wrapper">
    <div v-for="demandListKey of Object.keys(demandLists)" :key="demandListKey"
      class="lane" :class="{'drag-over': draggingOverDomName === demandListKey}"
      @dragenter="handleDragEnterEvent(demandListKey)" @dragover="handleDragOverEvent"
      @drop="handleDropEventWrap(demandListKey)">
      <h4>{{demandListsDescMap[demandListKey]}}</h4>
      <demand-card v-for="demand of demandLists[demandListKey]" :key="demand.demandId"
        :demand="demand" draggable="true"
        @dragstart="handleDragStartEvent(demand, demandListKey)"></demand-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DemandCard from '@/views/demand/components/DemandCard.vue';
import DemandOpBar from '@/views/demand/components/DemandOpBar.vue';

import demandComposable from '@/composables/demand/demandComposable';
import demandDragableComposable from '@/composables/demand/demandDragableComposable';

const { demandLists, getDemandList, demandListsDescMap } = demandComposable();
const {
  draggingOverDomName,
  handleDragStartEvent, handleDragOverEvent, handleDragEnterEvent, handleDropEvent,
} = demandDragableComposable();

const handleDropEventWrap = async (key) => {
  const needRefresh = await handleDropEvent(key);
  if (needRefresh) {
    getDemandList();
  }
};

const refresh = () => {
  getDemandList();
};
</script>

<style lang="postcss" scoped>
.wrapper {
  display: grid;
  grid-gap: 0 10px;
  grid-template-columns: repeat(5, 1fr);
  height: 100%;
}

.lane {
  transition: background linear 0.2s;

  &.drag-over {
    background: rgba(0, 0, 0, 0.1);
  }

  h4 {
    margin-bottom: 10px;
    line-height: 24px;
  }
}

.demand-card {
  width: 100% !important;
  min-width: 200px;
  max-width: 250px;
  margin-bottom: 10px;
  transition: opacity linear 0.2s;
  cursor: move;

  &:hover {
    opacity: 0.9;
  }
}
</style>
