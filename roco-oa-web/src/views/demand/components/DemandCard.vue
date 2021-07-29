<template>
  <div class="demand-card">
    <a class="name" :href="props.demand.wikiUrl" target="_blank">{{props.demand.demandName}}</a>
    <div class="info">
      <p><span>产品: </span><span>{{props.demand.userName}}</span></p>
      <p><span>评审日期: </span><span>{{props.demand.reviewDate}}</span></p>
      <p><span>计划上线: </span><span>{{props.demand.planOnlineDate}}</span></p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  demand: {
    type: Object,
  },
});
</script>

<style lang="postcss" scoped>
.demand-card {
  --fold-size: 30px;
  --fold-deg: -145deg;
  --fold-corner-rotate-deg: calc(2 * (var(--fold-deg) - 45deg) + 360deg);
  --fold-width: calc(30px / 0.82); /* 0.82 sin(var(--fold-deg)) */
  --fold-height: calc(30px / 0.57); /* 0.57 cos(var(--fold-deg)) */

  /* --fold-corner-deg: calc(var(--fold-deg) - var(--fold-corner-rotate-deg)); */

  position: relative;
  width: 250px;
  padding: 10px;
  border-radius: 4px;
  background:
    linear-gradient(
      var(--fold-deg),
      transparent var(--fold-size),
      var(--cyan-lighten-5) 0,
      var(--light-blue-lighten-3)
    ) no-repeat;
  filter: drop-shadow(-4px 4px 4px rgba(0, 0, 0, 0.4));

  &::after {
    content: '';
    position: absolute;
    top: -16px;
    right: 0;
    width: var(--fold-width);
    height: var(--fold-height);
    transform: rotate(var(--fold-corner-rotate-deg));
    transform-origin: 100% 100%;
    border-bottom-left-radius: 4px;

    /* background: linear-gradient(var(--fold-corner-deg), transparent 50%, var(--cyan-lighten-5) 0); */
    box-shadow: -3px 3px 3px var(--cyan-lighten-4);
  }

  .name {
    display: block;
    margin-bottom: 20px;
  }

  .info {
    font-size: 14px;

    p {
      display: flex;

      span:first-child {
        width: 90px;
        padding-right: 10px;
        text-align: right;
      }
    }
  }
}
</style>
