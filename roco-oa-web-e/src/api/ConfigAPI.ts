import { $http } from '@/plugins/ajax';
import { getResponseData } from '@/utils/apiUtils';

export const getConfigAPI = async () => {
  const response = await $http.get('/api/config/list');
  const data = await getResponseData(response);
  return data || {};
};
