import { $http } from '@/plugins/ajax';
import { getResponseData } from '@/utils/apiUtils';

export const getDemandListAPI = async () => {
  const response = await $http.get('/api/demand/list');
  const data = await getResponseData(response);
  return data?.list || [];
};

export const getDemandPeopleAPI = async (demandId: number) => {
  const response = await $http.get('/api/demand/people/list', { params: { demandId } });
  const data = await getResponseData(response);
  return data?.list || [];
};

export const saveDemandAPI = async (demand) => {
  const response = await $http.post('/api/demand/save', demand);
  return getResponseData(response);
};

export const getDemandAPI = async (demandId) => {
  const response = await $http.get('/api/demand/get', { params: { demandId } });
  const data = await getResponseData(response);
  return data;
};

export const saveDemandPeopleAPI = async (demandPeople) => {
  const response = await $http.post('/api/demand/people/save', demandPeople);
  return getResponseData(response);
};

export const deleteDemandPeopleAPI = async (demandPeopleIds: number[]) => {
  const response = await $http.post('/api/demand/people/delete', { demandPeopleIds });
  return getResponseData(response);
};
