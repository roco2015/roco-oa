import VueStore from '@/store/index';
import { Message, MessageType } from '@/interface/MessageInterface';

const store = VueStore;

export const getResponseData = (response, silence?: boolean) => {
  const { data } = response;
  if (data?.code === 0) {
    return data.data;
  }
  if (!silence) {
    const message: Message = {
      content: data?.message || '接口获取失败',
      type: MessageType.error,
    };
    store.commit('addMessageToQueue', message);
  }
  return {};
};
