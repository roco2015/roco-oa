import { saveDemandApi, getDemandApi } from '@/api/DemandAPI';
import { ref, inject } from 'vue';
import { ElMessage } from 'element-plus';

export default function demandPeopleComposable() {
  const $message = inject('$message') as typeof ElMessage;
  const demand = ref({
    groupId: '',
    demandName: '',
    wikiUrl: '',
    createDate: '',
    reviewDate: '',
    planOnlineDate: '',
    onlineDate: '',
  });

  const getDemand = async (demandId) => {
    const resDemand = await getDemandApi(demandId);
    if (resDemand) {
      demand.value = resDemand;
    }
  };

  const saveDemand = async () => {
    await saveDemandApi(demand.value);
    $message.success('保存成功');
  };

  return {
    demand,
    getDemand,
    saveDemand,
  };
}
