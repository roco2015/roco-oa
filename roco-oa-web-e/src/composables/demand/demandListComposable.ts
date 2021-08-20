import { getDemandListAPI } from '@/api/DemandAPI';
import { onMounted, reactive } from 'vue';

export default function demandListComposable() {
  const demandLists = reactive({
    10: [],
    20: [],
    30: [],
    40: [],
    50: [],
  });

  const demandListsDescMap = {
    10: '未评审',
    20: '已评审',
    30: '开发中',
    40: '测试中',
    50: '已上线',
  };

  const getDemandList = async () => {
    const list = await getDemandListAPI();
    const newDemand = [];
    const reviewed = [];
    const inDevelop = [];
    const inTesting = [];
    const online = [];
    list.forEach((demand) => {
      switch (demand.status) {
        case 10: newDemand.push(demand); break;
        case 20: reviewed.push(demand); break;
        case 30: inDevelop.push(demand); break;
        case 40: inTesting.push(demand); break;
        case 50: online.push(demand); break;
        default:
          break;
      }
    });
    demandLists[10] = newDemand;
    demandLists[20] = reviewed;
    demandLists[30] = inDevelop;
    demandLists[40] = inTesting;
    demandLists[50] = online;
  };

  onMounted(getDemandList);

  return {
    demandLists,
    demandListsDescMap,
    getDemandList,
  };
}
