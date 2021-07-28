import { createStore } from 'vuex';
import { Message } from '@/interface/MessageInterface';

interface State {
  messageQueue: Array<Message>
}

// 创建一个新的 store 实例
const store = createStore<State>({
  state() {
    return {
      messageQueue: [],
    };
  },
  mutations: {
    addMessageToQueue(state, message: Message) {
      state.messageQueue.push(message);
    },
    popMessageQueue(state) {
      return state.messageQueue.pop();
    },
  },
});

export default store;
