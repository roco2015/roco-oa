import { service } from 'daruk';
import { Demand } from '@/entities/Demand';
import { DemandPeople } from '@/entities/DemandPeople';
import { In } from 'typeorm';
import localCache from '@/config/LocalCache';

@service()
export class DemandService {

  public async getDemandList ({userId, demandName, groupId = ''}: Record<string, string|string[]>, hasRelations = false) {
    const options: Record<string, any> = { cache: true };
    if (hasRelations) {
      options.relations = ['demandPeople'];
    }
    options.where = {};
    if (userId) {
      options.where.userId = Array.isArray(userId) ? In(userId) : userId;
    }
    if (demandName) {
      options.where.demandName = Array.isArray(demandName) ? In(demandName) : demandName;
    }
    if (groupId) {
      options.where.groupId = Array.isArray(groupId) ? In(groupId) : groupId;
    }
    const demands = await Demand.find(options);
    console.log(demands);
    if (hasRelations) {
      demands.forEach(demand => {
        demand.demandPeople?.forEach(demandPeople => {
          this.formatDemandPeople(demandPeople);
        });
      });
    }
    return demands;
  }

  public async getDemand ({demandId}: Record<string, unknown> = {}) {
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
