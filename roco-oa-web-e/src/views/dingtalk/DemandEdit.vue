<template>
  <div class="demand-edit">
    <h3>新增需求</h3>
    <el-form ref="demandForm" :model="demand" :rules="rules" size="small" label-width="120px">
      <el-form-item v-if="groupId" label="是否绑定本群">
        <el-checkbox v-model="demand.groupId" :true-label="groupId">绑定 {{groupId}}</el-checkbox>
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
      <el-collapse>
        <el-collapse-item v-for="(people, index) of demandPeople" :key="people.demandPeopleId">
          <template #title>
            {{people.userName}}<span v-show="people.roleName"> : </span>{{people.roleName}}
            <template v-if="!people.userName && !people.roleName">点击展开编辑</template>
            <a class="delete-btn" @click.stop="deleteDemandPeople(index)">删除</a>
          </template>
          <el-form-item label="姓名">
            <user-select v-model:value="people.userId" @change="({desc}) => {people.userName = desc}"></user-select>
          </el-form-item>
          <el-form-item label="职能">
            <role-select v-model:value="people.roleId" @change="({desc}) => {people.roleName = desc}"></role-select>
          </el-form-item>
          <!-- 前端后端 -->
          <template v-if="isDeveloper(people.roleId)">
            <el-form-item label="开发时间">
              <el-date-picker v-model="people.developDate" value-format="YYYY-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="联调时间">
              <el-date-picker v-model="people.debugDate" value-format="YYYY-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="提测时间">
              <el-date-picker v-model="people.submitTestDate" value-format="YYYY-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
          </template>
          <!-- 测试 -->
          <template v-if="isQa(people.roleId)">
            <el-form-item label="开始测试时间">
              <el-date-picker v-model="people.startTestDate" value-format="YYYY-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
            <el-form-item label="完成测试时间">
              <el-date-picker v-model="people.finishTestDate" value-format="YYYY-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
          </template>
        </el-collapse-item>
      </el-collapse>
      <el-form-item>
        <a @click="addDemandPeople">新增人员</a>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="save">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue';
import { useRoute } from 'vue-router';

import RoleSelect from '@/components/select/RoleSelect.vue';
import UserSelect from '@/components/select/UserSelect.vue';

import demandComposable from '@/composables/demand/demandComposable';
import demandPeopleComposable from '@/composables/demand/demandPeopleComposable';

import { isDeveloper, isQa } from '@/utils/RoleUtils';

const message = inject('message') as typeof ElMessage;
const demandForm = ref(null);
const rules = {
  demandName: { required: true, message: '请填写需求名字', trigger: 'blur' },
};
const { demand, getDemand, saveDemand } = demandComposable();
const {
  demandPeople, getDemandPeople, addDemandPeople, saveDemandPeople, deleteDemandPeople,
} = demandPeopleComposable();

const route = useRoute();
const groupId = ref('');
groupId.value = route.query.groupId;

(async () => {
  const { demandId } = route.query;
  if (demandId) {
    await getDemand(demandId);
    await getDemandPeople(demandId);
  }
  if (groupId.value) {
    demand.value.groupId = groupId.value;
  }
})();

const save = async () => {
  const { demandId } = await saveDemand();
  if (!demandPeople.value.length) {
    message.success('保存成功');
    return;
  }
  demandPeople.value.forEach((people) => {
    people.demandId = demandId;
  });
  await saveDemandPeople();
  message.success('保存成功');
};

</script>

<style lang="postcss" scoped>
.demand-edit {
  padding: 20px;

  h3 {
    margin-bottom: 10px;
  }
}

.delete-btn {
  margin-left: 20px;
  color: var(--red-accent-1);
}
</style>
