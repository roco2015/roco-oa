import { service } from 'daruk';
import { Demand } from '@/entities/Demand';
import { DemandPeople } from '@/entities/DemandPeople';
import { In } from 'typeorm';

@service()
export class DemandService {

  public async getDemandList (demandName: string | string[]) {
    const options = { where: {} as any, relations: ['demandPeople'] };
    if (demandName) {
      if (Array.isArray(demandName)) {
        options.where.demandName =  In(demandName);
      } else {
        options.where.demandName =  demandName;
      }
    }
    const demands = Demand.find(options);
    return demands;
  }

  public async saveDemand (demand: Demand) {
    const res = await demand.save();
    return res;
  }

  public async getDemandPeopleListByDemandId (demandId) {
    const options = { where: {} as any };
    if (demandId) {
      if (Array.isArray(demandId)) {
        options.where.demandId =  In(demandId);
      } else {
        options.where.demandId =  demandId;
      }
    }
    const demandPeoples = DemandPeople.find(options);
    return demandPeoples;
  }

  public async saveDemandPeople (demandPeople: DemandPeople[]) {
    const res = await DemandPeople.save(demandPeople);
    return res;
  }
}
