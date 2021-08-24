import { service } from 'daruk';
import { Demand } from '@/entities/Demand';
import { DemandPeople } from '@/entities/DemandPeople';
import { In } from 'typeorm';
import localCache from '@/config/LocalCache';

@service()
export class DemandService {

  public async getDemandList (
    {demandName, groupId, status}: {demandName?: string|string[], groupId?: string|string[], status?: number|number[]},
    needPeople = false
  ) {
    const options: Record<string, any> = { cache: true };
    options.where = {};
    if (demandName) {
      options.where.demandName = Array.isArray(demandName) ? In(demandName) : demandName;
    }
    if (groupId) {
      options.where.groupId = Array.isArray(groupId) ? In(groupId) : groupId;
    }
    if (status) {
      options.where.status = Array.isArray(status) ? In(status) : status;
    }
    const demands = await Demand.find(options);

    if (needPeople) {
      const demandIds = demands.map(demand => demand.demandId);
      const demandPeople = await this.getDemandPeopleListByDemandId(demandIds);
      const demandMap = new Map<number, Demand>();
      demands.forEach(demand => {
        demandMap.set(demand.demandId, demand);
      });
      demandPeople.forEach (demandPeople => {
        const demand = demandMap.get(demandPeople.demandId);
        if (!demand) {
          return;
        }
        if (!demand.demandPeople) {
          demand.demandPeople = [];
        }
        demand.demandPeople.push(demandPeople);
      });
    }

    return demands;
  }

  public async getDemand ({demandId}: {demandId: number}) {
    const options: Record<string, any> = { cache: true };
    if (demandId) {
      options.where = {};
      options.where.demandId =  demandId;
    }
    const demand = await Demand.findOne(options);
    return demand;
  }

  public async saveDemand (demand: Demand) {
    const res = await demand.save();
    return res;
  }

  public async getDemandPeopleListByDemandId (demandId: number | number[]) {
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
    demandPeople.userName = localCache.userObj[demandPeople.userId];
    demandPeople.roleName = localCache.roleObj[demandPeople.roleId];
  }

  public async saveDemandPeople (demandPeople: DemandPeople[]) {
    const res = await DemandPeople.save(demandPeople);
    return res;
  }

  public async deleteDemandPeople (demandPeopleIds: number[]) {
    const res = await DemandPeople.delete(demandPeopleIds);
    return res;
  }
}
