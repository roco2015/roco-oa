import { controller, inject, get, all, DarukContext } from 'daruk';
import { UserService } from '@/service/UserService';
import { BaseController } from './BaseController';

@controller()
export class TestController extends BaseController {

  @inject('UserService')
  public userService: UserService;
  @all('/test')
  public async index(ctx: DarukContext) {
    console.log('query', ctx.query.id);
    console.log('request, body', ctx.request.body);
    const user = await this.userService.getOneUser();
    ctx.body = `hello ${user?.userName}`;
  }

  @get('/testAdd')
  public async testAdd(ctx: DarukContext) {
    ctx.body = `done ${Date.now()}`;
  }
}
