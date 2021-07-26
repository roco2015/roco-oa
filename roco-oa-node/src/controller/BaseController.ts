import { Result } from '@/bean/Result';

export abstract class BaseController {
  ok (data, message = 'success') {
    return new Result({data, message, code: 0});
  }
  
  error (data, message = 'error', code = 1) {
    return new Result({data, message, code});
  }
}
