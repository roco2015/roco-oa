<template>
  <div class="wrapper">
    <div v-for="demandListKey of Object.keys(demandLists)" :key="demandListKey"
      class="lane" :class="{'drag-over': draggingOverDomName === demandListKey}"
      @dragenter="handleDragEnterEvent(demandListKey)" @dragover="handleDragOverEvent"
      @drop="handleDropEventWrap(demandListKey)">
      <h4>
        <span>{{demandListsDescMap[demandListKey]}}</span>
        <div class="op">
          <a @click="showDemandModal">添加</a>
        </div>
      </h4>
      <demand-card v-for="demand of demandLists[demandListKey]" :key="demand.demandId"
        :demand="demand" draggable="true"
        @dragstart="handleDragStartEvent(demand, demandListKey)"></demand-card>
    </div>
  </div>
  <new-demand-dialog v-model:visible="demandDialogVisible"></new-demand-dialog>
</template>

<script lang="ts" setup>
import DemandCard from '@/views/demand/components/DemandCard.vue';
import NewDemandDialog from '@/views/demand/components/NewDemandDialog.vue';

import demandComposable from '@/composables/demand/demandComposable';
import demandDragableComposable from '@/composables/demand/demandDragableComposable';
import { ref } from 'vue';

const { demandLists, getDemandList, demandListsDescMap } = demandComposable();
const {
  draggingOverDomName,
  handleDragStartEvent, handleDragOverEvent, handleDragEnterEvent, handleDropEvent,
} = demandDragableComposable();

const demandDialogVisible = ref(false);
const showDemandModal = () => {
  demandDialogVisible.value = true;
};

const handleDropEventWrap = async (key) => {
  const needRefresh = await handleDropEvent(key);
  if (needRefresh) {
    getDemandList();
  }
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
    display: flex;
    margin-bottom: 10px;
    line-height: 24px;

    span {
      margin-right: 20px;
    }

    .op {
      color: var(--light-blue-lighten-3);
      font-size: 14px;

      a {
        cursor: pointer;
      }
    }
  }
}

.demand-card {
  width: 100% !important;
  min-width: 200px;
  max-width: 250px;
  margin-bottom: 10px;
  cursor: pointer;

  &:active {
    cursor: move;
  }
}
</style>
