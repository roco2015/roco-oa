<template>
  <div class="demand-card" :class="[demand.urgent?'urgent':'', `level-${demand.level}`, hasWatched?'fold':'unfold']">
    <p>{{props.demand.demandName}}</p>
    <div class="sub-title">
      <a :href="props.demand.wikiUrl" target="_blank">[wiki]</a>
      <a @click="exposedDetail">[展开详情]</a>
      <a @click="watchIt">{{hasWatched?'[已关注]':'[关注]'}}</a>
    </div>
    <div class="info">
      <p><span>产品: </span><span>{{props.demand.userName}}</span></p>
      <p><span>评审日期: </span><span>{{props.demand.reviewDate}}</span></p>
      <p><span>计划上线: </span><span>{{props.demand.planOnlineDate}}</span></p>
    </div>
    <div v-if="hasExposedDetail" class="info">
      <div v-for="person of demandPeople" :key="person.demandPeopleId" class="demand-people">
        <p><span>{{person.roleName}}: </span><span>{{person.userName}}</span></p>
        <p v-if="person.developDate"><span></span><span>开发 {{person.developDate}}</span></p>
        <p v-if="person.debugDate"><span></span><span>联调 {{person.debugDate}}</span></p>
        <p v-if="person.submiteTestDate"><span></span><span>提测 {{person.submiteTestDate}}</span></p>
        <p v-if="person.startTestDate"><span></span><span>开测 {{person.startTestDate}}</span></p>
        <p v-if="person.finishTestDate"><span></span><span>测完 {{person.finishTestDate}}</span></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import demandPeopleComposable from '@/composables/demand/demandPeopleComposable';
import { ref } from 'vue';

const props = defineProps({
  demand: {
    type: Object,
  },
});

const hasWatched = ref(false);
const watchIt = () => {
  hasWatched.value = !hasWatched.value;
};

const { demandPeople, getDemandPeopleIfEmpty } = demandPeopleComposable();
const hasExposedDetail = ref(false);
const exposedDetail = async () => {
  hasExposedDetail.value = !hasExposedDetail.value;
  getDemandPeopleIfEmpty(props.demand);
};

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
  transform-style: preserve-3d;
  perspective: 1000;
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

  /* &::after {
    content: '';
    position: absolute;
    top: -16px;
    right: 0;
    width: var(--fold-width);
    height: var(--fold-height);
    transform: rotate(var(--fold-corner-rotate-deg));
    transform-origin: 100% 100%;
    border-bottom-left-radius: 4px;

    box-shadow: -3px 3px 3px var(--corner-shadow-color);
  } */

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: var(--fold-height);
    height: var(--fold-width);
    transition: all 0.2s linear;
    border-top-right-radius: 4px;
    background: linear-gradient(var(--fold-deg), var(--bg-color-middle) 50%, transparent 0);
  }

  &.fold::after {
    transform: rotate3d(1, 0.7, 0, 180deg);
    box-shadow: 3px -3px 3px var(--corner-shadow-color);
  }

  &.urgent::before {
    content: '急';
    position: absolute;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border: 1px solid var(--deep-orange-accent-1);
    border-radius: 50%;
    color: var(--deep-orange-accent-1);
    font-size: 12px;
    line-height: 18px;
    text-align: center;
  }

  .sub-title {
    margin-bottom: 10px;
    font-size: 14px;

    a {
      color: var(--grey-darken-1);
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: var(--bg-color-end);
        filter: brightness(0.8);
      }

      &:not(:last-child) {
        margin-right: 3px;
      }
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

  .demand-people {
    margin-top: 5px;
    border-top: 1px dashed var(--grey-darken-1);
  }
}
</style>
