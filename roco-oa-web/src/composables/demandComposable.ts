import { getDemandListApi } from '@/api/DemandAPI';
import { ref, onMounted } from 'vue';

export default function demand() {
  const demandList = ref([]);

  const getDemandList = async () => {
    demandList.value = await getDemandListApi();
  };

  onMounted(getDemandList);

  return {
    demandList,
    getDemandList,
  };
}
