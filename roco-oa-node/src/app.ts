import 'module-alias/register';

import Koa from 'koa';
import 'reflect-metadata';
import './config/connection.ts';
import {getManager} from 'typeorm';
import {User} from './entities/User';
import {router} from '@/routes/route';

const app = new Koa();
app.use(router.routes());

app.use(async (ctx: any) => {
  const u = await getManager().find(User);
  const a = {b:1};
  console.log(u);
  ctx.body = a?.b ? 'Hi Koa':'wrong';
});

app.listen(3001);
console.log('--------------------启动成功--------------------');


