import { controller, get, DarukContext } from 'daruk';
import {getManager} from 'typeorm';
import {User} from '@/entities/User';

@controller()
export class TestController {
  @get('/test')
  public async index(ctx: DarukContext) {
    const user = await getManager().findOne(User, 1);
    ctx.body = `hello ${user?.user_name}`;
  }
}
