import { saveDemandAPI, getDemandAPI } from '@/api/DemandAPI';
import { ref } from 'vue';

export default function demandPeopleComposable() {
  const demand = ref({
    groupId: '',
    demandName: '',
    wikiUrl: '',
    createDate: '',
    reviewDate: '',
    planOnlineDate: '',
    onlineDate: '',
  });

  const getDemand = async (demandId) => {
    const resDemand = await getDemandAPI(demandId);
    if (resDemand) {
      demand.value = resDemand;
    }
  };

  const saveDemand = () => saveDemandAPI(demand.value);

  return {
    demand,
    getDemand,
    saveDemand,
  };
}
