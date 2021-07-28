<template>
  <div class="demand-card">
    <a :href="href" target="_blank">支持司机自动接单</a>
    <dl>
      <dt>产品</dt>
      <dd>青龙</dd>
      <dd>朱雀</dd>
    </dl>
  </div>
</template>

<script lang="ts" setup>
const href = 'http://wiki.wulianshuntong.com/books/%E7%94%A8%E8%BD%A6%E6%A8%A1%E5%9D%97/page/%E3%80%8C%E5%BE%85%E6%8E%92%E6%9C%9F%E3%80%8D%E4%B8%AA%E4%BD%93%E5%8F%B8%E6%9C%BA%E6%94%AF%E6%8C%81%E8%87%AA%E5%8A%A8%E6%8E%A5%E5%8D%95';
</script>

<style lang="postcss" scoped>
.demand-card {
  width: 200px;
  border: 1px solid var(--white);
}
</style>
