import { createStore } from 'vuex';
import { Message } from '@/interface/MessageInterface';

interface State {
  messageQueue: Array<Message>;
  config: any;
}

// 创建一个新的 store 实例
const store = createStore<State>({
  state() {
    return {
      messageQueue: [],
      config: null,
    };
  },
  mutations: {
    addMessageToQueue(state, message: Message) {
      state.messageQueue.push(message);
    },
    popMessageQueue(state) {
      return state.messageQueue.pop();
    },
    updateConfig(state, config) {
      [...Object.entries(config)].forEach(([key, valueObj]) => {
        const valueList = [];
        Object.entries(valueObj).forEach(([code, desc]) => {
          valueList.push({ code: Number(code) || code, desc });
        });
        config[`${key}List`] = valueList;
      });
      state.config = config;
    },
  },
});

export default store;
