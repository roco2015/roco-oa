<template>
  <el-dialog :model-value="props.visible" :width="500" @close="close">

  </el-dialog>
</template>

<script lang="ts" setup>
const props = defineProps({
  visible: {
    type: Boolean,
  },
});
const emit = defineEmits(['update:visible']);
const close = () => {
  emit('update:visible', false);
};
</script>

<style lang="postcss" scoped>

</style>
