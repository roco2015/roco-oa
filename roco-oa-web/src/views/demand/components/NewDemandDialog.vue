<template>
  <v-dialog :model-value="props.visible" width="500" @click:outside="close"></v-dialog>
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
