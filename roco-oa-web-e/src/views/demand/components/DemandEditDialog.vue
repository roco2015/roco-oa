<template>
  <el-dialog :model-value="props.visible" title="一个需求" :width="1200" @close="close">
    <el-form ref="formRef" :model="demand" :rules="rules" label-width="100px" size="small" class="form">
      <el-row :gutter="40">
        <el-col :span="8">
          <el-form-item label="需求名称" prop="demandName"><el-input v-model="demand.demandName"></el-input></el-form-item>
          <el-form-item label="需求链接"><el-input v-model="demand.wikiUrl"></el-input></el-form-item>
          <el-form-item label="评审日期">
            <el-date-picker v-model="demand.reviewDate" value-format="YYYY-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="计划上线">
            <el-date-picker v-model="demand.planOnlineDate" value-format="YYYY-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="难度">
            <el-select v-model="demand.level" placeholder="请选择难度">
              <el-option label="超大个" :value="1"></el-option>
              <el-option label="大个" :value="2"></el-option>
              <el-option label="一般" :value="3"></el-option>
              <el-option label="小个" :value="4"></el-option>
              <el-option label="超小个" :value="5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否加急">
            <el-radio-group v-model="demand.urgent">
              <el-radio :label="0">不加急</el-radio>
              <el-radio :label="1">加急</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="备注"><el-input v-model="demand.comment" type="textarea"></el-input></el-form-item>
        </el-col>
        <el-col :span="16">
          <div v-for="(person, index) of demand.demandPeople" :key="person.demandPeopleId || index" class="demand-people">
            <el-form-item label="姓名"><el-input v-model="person.userId"></el-input></el-form-item>
            <el-form-item label="职位"><el-input v-model="person.roleId"></el-input></el-form-item>
            <template v-if="person.roleId === 3" >
              <el-form-item label="开始测试时间">
                <el-date-picker v-model="person.startTestDate" value-format="YYYY-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
              </el-form-item>
              <el-form-item label="完成测试时间">
                <el-date-picker v-model="person.finishTestDate" value-format="YYYY-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
              </el-form-item>
            </template>
            <template v-else>
              <el-form-item label="开发时间">
                <el-date-picker v-model="person.developDate" value-format="YYYY-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
              </el-form-item>
              <el-form-item label="联调时间">
                <el-date-picker v-model="person.debugDate" value-format="YYYY-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
              </el-form-item>
              <el-form-item label="提测时间">
                <el-date-picker v-model="person.submiteTestDate" value-format="YYYY-MM-DD" type="date" placeholder="选择日期"></el-date-picker>
              </el-form-item>
            </template>
          </div>
          <a @click="addPeople">添加一个参与人（开发/测试）</a>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <el-button size="small" @click="close">取 消</el-button>
      <el-button type="primary" size="small" @click="save">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, reactive, inject } from 'vue';

import { saveDemandApi } from '@/api/DemandAPI';

const props = defineProps({
  visible: {
    type: Boolean,
  },
});
const $emit = defineEmits(['update:visible', 'refresh']);
const $message = inject('$message');
const formRef = ref(null);
const rules = {
  name: { required: true, message: '请填写需求名字', trigger: 'blur' },
};
const close = () => {
  $emit('update:visible', false);
};

const demand = reactive({
  demandName: '',
  wikiUrl: '',
  level: 3,
  urgent: 0,
  reviewDate: '',
  planOnlineDate: '',
  demandPeople: [],
  comment: '',
});

const addPeople = () => {
  demand.demandPeople.push({});
};

const save = async () => {
  try {
    await formRef.value.validate();
  } catch (err) { return; }
  await saveDemandApi(demand);
  $emit('refresh');
  ($message as any).success('保存成功');
  close();
};
</script>

<style lang="postcss" scoped>
.form {
  padding-right: 20px;
}

.demand-people {
  display: flex;
  flex-flow: row wrap;

  :deep(.el-input) {
    width: 130px;
  }
}
</style>
