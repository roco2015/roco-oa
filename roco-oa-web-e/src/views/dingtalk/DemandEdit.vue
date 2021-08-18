<template>
  <div class="demand-edit">
    <h3>新增需求</h3>
    <el-form ref="demandForm" :model="demand" :rules="rules" size="small" label-width="120px">
      <el-form-item v-if="groupId" label="是否绑定本群">
        <el-checkbox v-model="demand.groupId" :true-label="groupId">绑定</el-checkbox>
      </el-form-item>
      <el-form-item label="需求名字" prop="demandName">
        <el-input v-model="demand.demandName"></el-input>
      </el-form-item>
      <el-form-item label="需求wiki">
        <el-input v-model="demand.wikiUrl"></el-input>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-date-picker v-model="demand.createDate" value-format="YYYY-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="评审时间">
        <el-date-picker v-model="demand.reviewDate" value-format="YYYY-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="计划上线时间">
        <el-date-picker v-model="demand.planOnlineDate" value-format="YYYY-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item label="上线时间">
        <el-date-picker v-model="demand.onlineDate" value-format="YYYY-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
    </el-form>
    <el-button type="primary" size="small" @click="saveDemand">确定</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

import demandComposable from '@/composables/demand/demandComposable';

const demandForm = ref(null);
const rules = {
  demandName: { required: true, message: '请填写需求名字', trigger: 'blur' },
};
const { demand, getDemand, saveDemand } = demandComposable();

const route = useRoute();
const groupId = ref('');
groupId.value = route.query.groupId;

(async () => {
  if (route.query.demandId) {
    await getDemand(route.query.demandId);
  }
  if (groupId.value) {
    demand.value.groupId = groupId.value;
  }
})();
</script>

<style lang="postcss" scoped>
.demand-edit {
  padding: 20px;

  h3 {
    margin-bottom: 10px;
  }
}
</style>
