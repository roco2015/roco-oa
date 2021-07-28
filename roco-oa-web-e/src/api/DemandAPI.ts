import { $http } from '@/plugins/ajax';
import { getResponseData } from '@/utils/apiUtils';

export const getDemandListApi = async () => {
  const response = await $http.get('/api/demand/list');
  const data = getResponseData(response);
  return data?.list || [];
};

export const getDemandPeopleApi = async (demandId: number) => {
  const response = await $http.get('/api/demand/people/list', { params: { demandId } });
  const data = getResponseData(response);
  return data?.list || [];
};
