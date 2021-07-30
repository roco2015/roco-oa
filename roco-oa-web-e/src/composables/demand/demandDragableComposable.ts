import { saveDemandApi } from '@/api/DemandAPI';
import { ref } from 'vue';

export default function demandDragableComposable() {
  let draggingDemand;
  const draggingOverStartDomName = ref('');
  const draggingOverDomName = ref('');

  const handleDragStartEvent = (demand, status) => {
    draggingDemand = demand;
    draggingOverStartDomName.value = status;
  };
  const handleDragOverEvent = (event) => { event.preventDefault(); };
  const handleDragEnterEvent = (status) => { draggingOverDomName.value = status; };
  const handleDropEvent = async (status) => {
    draggingOverDomName.value = '';
    if (draggingOverStartDomName.value === status) {
      return false;
    }
    draggingDemand.status = Number(status);
    await saveDemandApi(draggingDemand);
    return true;
  };

  return {
    draggingDemand,
    draggingOverDomName,
    handleDragStartEvent,
    handleDragOverEvent,
    handleDragEnterEvent,
    handleDropEvent,
  };
}
