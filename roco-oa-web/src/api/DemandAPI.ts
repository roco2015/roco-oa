import { $http } from '@/plugins/ajax';

export const getDemandListApi = async () => {
  const res = await $http.get('/api/demand/list');
  return res.data;
};
