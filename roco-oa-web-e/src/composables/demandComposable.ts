import { getDemandListApi, getDemandPeopleApi } from '@/api/DemandAPI';
import { ref, onMounted } from 'vue';

export default function demand() {
  const demandList = ref([]);

  const getDemandList = async () => {
    demandList.value = await getDemandListApi();
  };

  const getDemandPeopleByDemandId = (demandId: number) => getDemandPeopleApi(demandId);

  const setDemandPeopleInDemand = async (aDemand) => {
    aDemand.demandPeople = await getDemandPeopleByDemandId(aDemand.demandId);
  };

  onMounted(getDemandList);

  return {
    demandList,
    getDemandList,
    setDemandPeopleInDemand,
    getDemandPeopleByDemandId,
  };
}
