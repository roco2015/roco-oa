import { controller, inject, get, DarukContext } from 'daruk';
import { UserService } from '@/service/UserService';
import { DemandService } from '@/service/DemandService';

@controller()
export class TestController {

  @inject('UserService')
  public userService: UserService;

  @inject('DemandService')
  public demandService: DemandService;

  @get('/test')
  public async index(ctx: DarukContext) {
    const user = await this.userService.getOneUser();
    ctx.body = `hello ${user?.userName}`;
  }

  @get('/testAdd')
  public async testAdd(ctx: DarukContext) {
    await this.demandService.newADemandPeople();
    ctx.body = `done ${Date.now()}`;
  }
}
