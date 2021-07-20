import Router from 'koa-router';

const router = new Router(); 

router.get('/hello', async (ctx) => {
  ctx.type = 'html';
  ctx.body = '<h1>hello world!</h1>';
});

export {router};
