import { getDemandPeopleApi } from '@/api/DemandAPI';
import { ref } from 'vue';

export default function demandPeopleComposable() {
  const getDemandPeople = (demandId) => getDemandPeopleApi(demandId);
  const demandPeople = ref([]);

  const getDemandPeopleIfEmpty = async (demand) => {
    if (demand.demandPeople?.length) {
      demandPeople.value = demand.demandPeople;
    } else {
      demandPeople.value = await getDemandPeople(demand.demandId);
    }
  };

  return {
    demandPeople,
    getDemandPeopleIfEmpty,
    getDemandPeople,
  };
}
