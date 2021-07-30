<template>
  <div class="footer-inner">
    <a href="https://github.com/roco2015" target="_blank">Author: 圆企鹅·Alter</a>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="postcss" scoped>
.footer-inner {
  width: 100%;
  color: var(--grey-darken-2);
  font-size: 12px;
  text-align: right;

  a {
    color: var(--grey-darken-2);

    &:hover {
      color: var(--cyan-accent-4);
      filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2));
    }
  }
}
</style>
