import { saveDemandAPI, getDemandAPI } from '@/api/DemandAPI';
import { ref } from 'vue';
import moment from 'moment';

export default function demandPeopleComposable() {
  const totday = moment().format('YYYY-MM-DD');
  const demand = ref({
    groupId: '',
    demandName: '',
    wikiUrl: '',
    createDate: totday,
    reviewDate: totday,
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
