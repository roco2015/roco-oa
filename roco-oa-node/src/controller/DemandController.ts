import { controller, inject, get, post, DarukContext } from 'daruk';
import { DemandService } from '@/service/DemandService';
import { Demand } from '@/entities/Demand';
import { DemandPeople } from '@/entities/DemandPeople';
import { BaseController } from './BaseController';

@controller()
export class DemandController extends BaseController {

  @inject('DemandService')
  private demandService: DemandService;

  @get('/demand/list')
  public async getDemandList(ctx: DarukContext) {
    const demandName = ctx.query.demandName;
    if (typeof demandName !== 'string') {
      return this.error400();
    }
    const relatetion = Boolean(ctx.query.relatetion);
    const demandList = await this.demandService.getDemandList({demandName}, relatetion);
    ctx.body = this.ok({list: demandList});
  }

  @get('/demand/get')
  public async getDemand(ctx: DarukContext) {
    const demandId = ctx.query.demandId;
    const demand = await this.demandService.getDemand({demandId});
    ctx.body = this.ok(demand);
  }

  @post('/demand/save')
  public async addDemand(ctx: DarukContext) {
    console.log(ctx.request.body);
    const demand = Demand.create(ctx.request.body as Object);
    const resDemand = await this.demandService.saveDemand(demand);
    ctx.body = this.ok({demandId: resDemand.demandId});
  }

  @get('/demand/people/list')
  public async getDemandPeopleList(ctx: DarukContext) {
    const demandId = ctx.query.demandId;
    const demandPeopleList = await this.demandService.getDemandPeopleListByDemandId(demandId);
    ctx.body = this.ok({list: demandPeopleList});
  }

  @post('/demand/people/save')
  public async saveDemandPeople(ctx: DarukContext) {
    const demandDeveloper = DemandPeople.create(ctx.request.body);
    await this.demandService.saveDemandPeople(demandDeveloper);
    ctx.body = this.ok();
  }
}
