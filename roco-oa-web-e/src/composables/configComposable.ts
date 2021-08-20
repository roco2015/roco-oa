import { useStore } from 'vuex';
import { getConfigAPI } from '@/api/ConfigAPI';

export default function configComposable() {
  const store = useStore();
  const getConfig = async () => {
    const config = await getConfigAPI();
    store.commit('updateConfig', config);
  };
  return {
    getConfig,
  };
}
