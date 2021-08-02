<template>
  <div class="op">
    <el-button @click="showDemandModal">添加需求</el-button>
  </div>
  <demand-edit-dialog v-model:visible="demandDialogVisible"></demand-edit-dialog>
</template>

<script lang="ts" setup>
import DemandEditDialog from '@/views/demand/components/DemandEditDialog.vue';
import { ref } from 'vue';

const demandDialogVisible = ref(false);
const showDemandModal = () => {
  demandDialogVisible.value = true;
};
</script>

<style lang="postcss" scoped>
.op {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--grey-lighten-3);
  font-size: 14px;
}
</style>
