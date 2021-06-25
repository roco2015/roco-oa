<template>
  <h1><slot></slot></h1>
  <div class="content">
    <h3>roco搭建自用脚手架</h3>
    <dl>
      <dt>内容配置</dt>
      <dd>1. vue3 + typescript + vite2 + postcss</dd>
      <dd>2. eslint + stylelint</dd>

      <dt>vscode需要安装的插件</dt>
      <dd>1. eslint            publisher:"Dirk Baeumer"</dd>
      <dd>2. stylelint         publisher:"stylelint"</dd>
      <dd>3. postcss           自己酌情安装</dd>

      <dt>安装依赖</dt>
      <dd>yarn install</dd>
    </dl>
    <p>Email: roco2015@163.com</p>
    <p>Github: roco2015@163.com</p>
  </div>
  <button type="button" class="test-btn" @click="count++">count is: {{ count }}</button>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    return { count };
  },
});
</script>

<style lang="postcss" scoped>
h1 {
  width: 600px;
  margin: 60px auto;
}

.content {
  width: 600px;
  margin: 60px auto;

  dl {
    margin: 20px 0 60px;
  }

  dt {
    margin-top: 10px;
  }

  dd {
    padding-left: 20px;
  }
}

.test-btn {
  display: block;
  margin: 0 auto;
  padding: 0 20px;
  border: 1px solid gray;
  border-radius: 4px;
  background: none;
  line-height: 40px;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background: rgba(0, 0, 0, 0.2);
  }
}
</style>
