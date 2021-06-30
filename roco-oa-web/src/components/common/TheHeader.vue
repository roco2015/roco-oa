<template>
  <the-logo></the-logo>
  <div class="header-right">
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheLogo from '@/components/common/TheLogo.vue';

export default defineComponent({
  name: 'TheHeader',
  components: { TheLogo },
});
</script>

<style lang="postcss" scoped>

</style>
