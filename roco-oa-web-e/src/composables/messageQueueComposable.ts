import { computed, watch } from 'vue';
import { useStore } from 'vuex';

export default function messageQueueComposable() {
  const store = useStore();
  const messageQueue = computed(() => store.state.messageQueue);

  watch(messageQueue, (queue) => {
    if (!queue.length) {
      return;
    }
    console.log(queue.pop());
  }, { deep: true });
}
