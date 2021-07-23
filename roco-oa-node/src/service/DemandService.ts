import { service } from 'daruk';
import { DemandPeople } from '@/entities/DemandPeople';

@service()
export class DemandService {

  public async newADemandPeople() {
    const person = new DemandPeople();
    const nowTime = Date.now();
    person.demandId = nowTime;
    person.userId = nowTime + 1;
    person.roleId = nowTime - 1;

    const res = await person.save();
    console.log(res);
  }
}
