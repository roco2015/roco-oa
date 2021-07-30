<template>
  <div class="wrapper">
    <div class="lane">
      <h4>
        <span>未评审</span>
        <div class="op">
          <a @click="showDemandModal">添加</a>
        </div>
      </h4>
      <demand-card v-for="demand of demandLists.newDemand" :key="demand.demandId" :demand="demand"></demand-card>
    </div>
    <div class="lane">
      <h4>已评审</h4>
      <demand-card v-for="demand of demandLists.reviewed" :key="demand.demandId" :demand="demand"></demand-card>
    </div>
    <div class="lane">
      <h4>开发中</h4>
      <demand-card v-for="demand of demandLists.inDevelop" :key="demand.demandId" :demand="demand"></demand-card>
    </div>
    <div class="lane">
      <h4>测试中</h4>
      <demand-card v-for="demand of demandLists.inTesting" :key="demand.demandId" :demand="demand"></demand-card>
    </div>
    <div class="lane">
      <h4>已上线</h4>
      <demand-card v-for="demand of demandLists.online" :key="demand.demandId" :demand="demand"></demand-card>
    </div>
  </div>
  <new-demand-dialog v-model:visible="demandDialogVisible"></new-demand-dialog>
</template>

<script lang="ts" setup>
import demandComposable from '@/composables/demandComposable';
import DemandCard from '@/views/demand/components/DemandCard.vue';
import NewDemandDialog from '@/views/demand/components/NewDemandDialog.vue';
import { ref } from 'vue';

const { demandLists } = demandComposable();

const demandDialogVisible = ref(false);
const showDemandModal = () => {
  demandDialogVisible.value = true;
};
</script>

<style lang="postcss" scoped>
.wrapper {
  display: grid;
  grid-gap: 0 10px;
  grid-template-columns: repeat(5, 1fr);
}

.lane {
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
    }
  }
}

.demand-card {
  width: 100% !important;
  min-width: 200px;
  max-width: 250px;
  margin-bottom: 10px;
}
</style>
