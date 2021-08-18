import { $http } from '@/plugins/ajax';
import { getResponseData } from '@/utils/apiUtils';

export const getDemandListApi = async () => {
  const response = await $http.get('/api/demand/list');
  const data = await getResponseData(response);
  return data?.list || [];
};

export const getDemandPeopleApi = async (demandId: number) => {
  const response = await $http.get('/api/demand/people/list', { params: { demandId } });
  const data = await getResponseData(response);
  return data?.list || [];
};

export const saveDemandApi = async (demand) => {
  const response = await $http.post('/api/demand/save', demand);
  getResponseData(response);
};

export const getDemandApi = async (demandId) => {
  const response = await $http.get('/api/demand/get', { params: { demandId } });
  const data = await getResponseData(response);
  return data;
};
