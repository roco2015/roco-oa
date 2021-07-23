import { DarukServer } from 'daruk';
import '@/config/connection.ts';

(async () => {
  const myapp = DarukServer();
  await myapp.loadFile('./controller');
  await myapp.binding();
  myapp.listen(3000);


  console.log('--------------------------------------------------------------------');
  console.log('-----------------------------success--------------------------------');
  console.log('--------------------------------------------------------------------');
})();
