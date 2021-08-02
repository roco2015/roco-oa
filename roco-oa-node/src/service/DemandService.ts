import { service } from 'daruk';
import { Demand } from '@/entities/Demand';
import { DemandPeople } from '@/entities/DemandPeople';
import { In } from 'typeorm';
import localCache from '@/config/localCache';

@service()
export class DemandService {

  public async getDemandList ({demandName}: Record<string, unknown>, hasRelations?:boolean) {
    const options: Record<string, any> = { cache: true };
    if (hasRelations) {
      options.relations = ['demandPeople'];
    }
    if (demandName) {
      options.where = {};
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
    const options: Record<string, any> = { cache: true };
    if (demandId) {
      options.where = {};
      if (Array.isArray(demandId)) {
        options.where.demandId =  In(demandId);
      } else {
        options.where.demandId =  demandId;
      }
    }
    const demandPeoples = await DemandPeople.find(options);
    demandPeoples.forEach(demandPeople => {
      this.formatDemandPeople(demandPeople);
    });
    return demandPeoples;
  }

  private formatDemandPeople(demandPeople) {
    demandPeople.userName = localCache.userMap.get(demandPeople.userId);
    demandPeople.roleName = localCache.roleMap.get(demandPeople.roleId);
  }

  public async saveDemandPeople (demandPeople: DemandPeople[]) {
    const res = await DemandPeople.save(demandPeople);
    return res;
  }
}
