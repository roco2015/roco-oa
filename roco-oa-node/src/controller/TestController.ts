import { controller, get, all, DarukContext } from 'daruk';
import { BaseController } from './BaseController';

@controller()
export class TestController extends BaseController {

  @all('/test')
  public async index(ctx: DarukContext) {
    console.log('query', ctx.query.id);
    console.log('request, body', ctx.request.body);
    ctx.body = `done ${Date.now()}`;
  }

  @get('/testAdd')
  public async testAdd(ctx: DarukContext) {
    ctx.body = `done ${Date.now()}`;
  }
}
