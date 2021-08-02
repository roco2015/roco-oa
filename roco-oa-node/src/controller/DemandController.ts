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
    const demandList = await this.demandService.getDemandList({demandName});
    ctx.body = this.ok({list: demandList});
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
    const demandDeveloper = DemandPeople.create(ctx.request.body.demandPeople);
    await this.demandService.saveDemandPeople(demandDeveloper);
    ctx.body = this.ok();
  }
}
