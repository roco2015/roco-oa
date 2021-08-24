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
    const demandList = await this.demandService.getDemandList({demandName});
    ctx.body = this.ok({list: demandList});
  }

  @get('/demand/get')
  public async getDemand(ctx: DarukContext) {
    const demandId = Number(ctx.query.demandId);
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
    const demandId = Number(ctx.query.demandId);
    const demandPeopleList = await this.demandService.getDemandPeopleListByDemandId(demandId);
    ctx.body = this.ok({list: demandPeopleList});
  }

  @post('/demand/people/save')
  public async saveDemandPeople(ctx: DarukContext) {
    const demandPeople = DemandPeople.create(ctx.request.body);
    await this.demandService.saveDemandPeople(demandPeople);
    ctx.body = this.ok();
  }

  @post('/demand/people/delete')
  public async deleteDemandPeople(ctx: DarukContext) {
    const demandPeopleIds = ctx.request.body?.demandPeopleIds;
    if (!demandPeopleIds?.length) {
      ctx.body = this.error400();
      return;
    }
    await this.demandService.deleteDemandPeople(demandPeopleIds);
    ctx.body = this.ok();
  }
}
