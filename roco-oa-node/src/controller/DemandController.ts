import { controller, inject, get, post, DarukContext } from 'daruk';
import { DemandService } from '@/service/DemandService';
import { Demand } from '@/entities/Demand';
import { DemandPeople } from '@/entities/DemandPeople';
import { BaseController } from './BaseController';

@controller()
export class DemandController extends BaseController {

  @inject('DemandService')
  public demandService: DemandService;

  @get('/demand/list')
  public async getDemandList(ctx: DarukContext) {
    const demandName = ctx.query.demandName;
    const demandList = await this.demandService.getDemandList(demandName);
    ctx.body = this.ok(demandList);
  }

  @post('/demand/add')
  public async addDemand(ctx: DarukContext) {
    const demand = Demand.create(ctx.request.body as Object);
    await this.demandService.saveDemand(demand);
    ctx.body = this.ok(`done ${Date.now()}`);
  }


  @post('/demand/people/add')
  public async saveDemandPeople(ctx: DarukContext) {
    const demandPeople = DemandPeople.create(ctx.request.body.demandPeople);
    await this.demandService.saveDemandPeople(demandPeople);
    ctx.body = this.ok(`done ${Date.now()}`);
  }
}
