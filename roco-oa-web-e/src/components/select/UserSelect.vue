<template>
  <el-select :model-value="props.value" :multiple="props.multiple" :disabled="props.disabled" placeholder="请选择" clearable filterable @change="handleChange">
    <el-option v-for="item of userList" :key="item.code" :label="item.desc" :value="item.code">
    </el-option>
  </el-select>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';

const store = useStore();
const { userList } = store.state.config;

const props = defineProps({
  value: [Number, String],
  multiple: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:value', 'change']);

const handleChange = (val) => {
  emit('update:value', val);
  const selected = userList.filter((item) => item.code === val);
  emit('change', props.multiple ? selected : selected[0]);
};

</script>
