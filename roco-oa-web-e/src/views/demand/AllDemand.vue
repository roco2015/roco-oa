<template>
  <el-table :data="demandList" row-key="demandId" @expand-change="expandRow">
    <el-table-column type="expand">
      <template #default="{row}">
        <template v-if="row.demandPeople">
          <p v-for="item of row.demandPeople" :key="item.demandPeopleId">
            {{item.userId}}
          </p>
        </template>
        <template v-else>loading</template>
      </template>
    </el-table-column>
    <el-table-column prop="demandId" align="center" label="需求ID" width="100px"></el-table-column>
    <el-table-column prop="demandName" align="center" label="需求名"></el-table-column>
    <el-table-column prop="wikiUrl" align="center" label="wiki链接"></el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import demand from '@/composables/demandComposable';

const { demandList, setDemandPeopleInDemand } = demand();

const expandRow = (row) => {
  if (!row.demandPeople) {
    setDemandPeopleInDemand(row);
  }
};
</script>

<style lang="postcss" scoped></style>
