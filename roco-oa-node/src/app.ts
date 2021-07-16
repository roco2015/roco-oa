import Koa from 'koa';
import 'reflect-metadata';
import './config/connection.ts';
import {getManager} from 'typeorm';
import {User} from './entities/User';

const app = new Koa();

app.use(async (ctx: any) => {
  const u = await getManager().find(User);
  const a = {b:1}
  console.log(u);
  ctx.body = a?.b ? 'xxxx':'Hi Koatty';
});

app.listen(3001);
console.log('--------------------启动成功--------------------')


