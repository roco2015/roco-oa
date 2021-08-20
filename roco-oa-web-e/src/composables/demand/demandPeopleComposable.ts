import { getDemandPeopleAPI, saveDemandPeopleAPI } from '@/api/DemandAPI';
import { ref } from 'vue';

export default function demandPeopleComposable() {
  const demandPeople = ref([]);
  const originDemandPeople = {
    demandPeopleId: 0,
    demandId: 0,
    userId: '',
    userName: '',
    roleId: '',
    developDate: '',
    debugDate: '',
    submitTestDate: '',
    startTestDate: '',
    finishTestDate: '',
    comment: '',
  };

  const getDemandPeople = async (demandId) => {
    demandPeople.value = await getDemandPeopleAPI(demandId);
  };

  const getDemandPeopleIfEmpty = (demandId) => {
    if (!demandPeople.value.length) {
      getDemandPeople(demandId);
    }
  };

  const addDemandPeople = (addedDemandPeople = {}) => {
    demandPeople.value.push({ ...originDemandPeople, ...addedDemandPeople });
  };

  const saveDemandPeople = () => {
    saveDemandPeopleAPI(demandPeople.value);
  };

  return {
    demandPeople,
    getDemandPeople,
    getDemandPeopleIfEmpty,
    addDemandPeople,
    saveDemandPeople,
  };
}
