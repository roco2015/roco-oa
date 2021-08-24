import { getDemandPeopleAPI, saveDemandPeopleAPI, deleteDemandPeopleAPI } from '@/api/DemandAPI';
import { ref } from 'vue';

export default function demandPeopleComposable() {
  const demandPeople = ref([]);
  const deleteDemandPeopleIds = [];
  const originDemandPeople = {
    demandId: '',
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

  const saveDemandPeople = async () => {
    demandPeople.value = demandPeople.value.filter((demandPerson) => {
      if (!demandPerson.userId && demandPerson.demandPeopleId) {
        deleteDemandPeopleIds.push(demandPerson.demandPeopleId);
      }
      return demandPerson.userId;
    });
    await saveDemandPeopleAPI(demandPeople.value);
    await deleteDemandPeopleAPI(deleteDemandPeopleIds);
  };

  const deleteDemandPeople = (index) => {
    const deletedDemandPeople = demandPeople.value.splice(index, 1);
    deleteDemandPeopleIds.push(deletedDemandPeople[0]?.demandPeopleId);
  };

  return {
    demandPeople,
    getDemandPeople,
    getDemandPeopleIfEmpty,
    addDemandPeople,
    saveDemandPeople,
    deleteDemandPeople,
  };
}
