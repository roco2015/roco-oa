<template>
  <el-row>
    <el-col :span="8"><span>需求名称:</span>{{props.demand.demandName}}</el-col>
    <el-col :span="8"><span>wiki链接:</span><a :href="props.demand.wikiUrl">[链接]</a></el-col>
  </el-row>
  <el-row>
    <el-col :span="8"><span>评审时间:</span>{{props.demand.reviewDate}}</el-col>
    <el-col :span="8"><span>计划上线:</span>{{props.demand.planOnlineDate}}</el-col>
    <el-col :span="8"><span>当前状态:</span>{{props.demand.status}}</el-col>
  </el-row>
  <p><span>产品:</span></p>
</template>

<script lang="ts" setup>
import { getDemandPeopleApi } from '@/api/DemandAPI';
import { ref } from 'vue';

const props = defineProps({
  demand: {
    type: Object,
  },
});
const demandPeople = ref([]);
(async () => {
  demandPeople.value = await getDemandPeopleApi(props.demand.demandId);
  // if (props.demand.demandPeople?.length) {
  //   demandPeople = toRefs(props.demand.demandPeople);
  // } else {
  //   demandPeople.value = await getDemandPeopleApi(props.demand.demandId);
  // }
})();
</script>

<style lang="postcss" scoped>

</style>
