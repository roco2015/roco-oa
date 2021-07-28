import { DarukServer } from 'daruk';
import '@/config/connection.ts';
import init from '@/config/init';

(async () => {
  const myapp = DarukServer();
  await myapp.loadFile('./controller');
  await myapp.loadFile('./service');
  await myapp.binding();
  myapp.listen(3001);

  init();
  
  console.log('--------------------------------------------------------------------');
  console.log('-----------------------------success--------------------------------');
  console.log('--------------------------------------------------------------------');
})();
