import { DarukServer } from 'daruk';
import '@/config/connection.ts';

(async () => {
  const myapp = DarukServer();
  await myapp.loadFile('./controller');
  await myapp.loadFile('./service');
  await myapp.binding();
  myapp.listen(3001);


  console.log('--------------------------------------------------------------------');
  console.log('-----------------------------success--------------------------------');
  console.log('--------------------------------------------------------------------');
})();
