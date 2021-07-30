<template>
  <div class="demand-card" :class="[demand.urgent?'urgent':'', `level-${demand.level}`]">
    <a class="title" :href="props.demand.wikiUrl" target="_blank">{{props.demand.demandName}}</a>
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
  &.level-1 {
    --bg-color-middle: var(--pink-lighten-5);
    --bg-color-end: var(--red-lighten-3);
    --corner-shadow-color: var(--pink-lighten-4);
  }

  &.level-2 {
    --bg-color-middle: var(--orange-lighten-5);
    --bg-color-end: var(--amber-lighten-3);
    --corner-shadow-color: var(--orange-lighten-4);
  }

  &.level-3 {
    --bg-color-middle: var(--light-blue-lighten-5);
    --bg-color-end: var(--blue-lighten-3);
    --corner-shadow-color: var(--light-blue-lighten-4);
  }

  &.level-4 {
    --bg-color-middle: var(--teal-lighten-5);
    --bg-color-end: var(--cyan-lighten-3);
    --corner-shadow-color: var(--teal-lighten-4);
  }

  &.level-5 {
    --bg-color-middle: var(--light-green-lighten-5);
    --bg-color-end: var(--green-lighten-3);
    --corner-shadow-color: var(--light-green-lighten-4);
  }

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
      var(--bg-color-middle) 0,
      var(--bg-color-end)
    ) no-repeat;
  color: var(--grey-darken-1);
  filter: drop-shadow(2px 4px 6px var(--bg-color-middle));

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
    box-shadow: -3px 3px 3px var(--corner-shadow-color);
  }

  &.urgent::before {
    content: '急';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
    border: 1px solid var(--deep-orange-accent-1);
    border-radius: 50%;
    color: var(--deep-orange-accent-1);
    font-size: 12px;
    line-height: 18px;
    text-align: center;
  }

  .title {
    display: block;
    margin-bottom: 20px;
    color: var(--grey-darken-1);

    &:hover {
      color: var(--bg-color-end);
      filter: brightness(0.8);
    }
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
