import { getDemandListApi } from '@/api/DemandAPI';
import { onMounted, reactive } from 'vue';

export default function demandComposable() {
  const demandLists = reactive({
    all: [],
    newDemand: [],
    reviewed: [],
    inDevelop: [],
    inTesting: [],
    online: [],
  });

  const getDemandList = async () => {
    const list = await getDemandListApi();
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
    demandLists.all = list;
    demandLists.newDemand = newDemand;
    demandLists.reviewed = reviewed;
    demandLists.inDevelop = inDevelop;
    demandLists.inTesting = inTesting;
    demandLists.online = online;
  };

  onMounted(getDemandList);

  return {
    demandLists,
    getDemandList,
  };
}
