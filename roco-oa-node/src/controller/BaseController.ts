import { Result } from '@/bean/Result';

export abstract class BaseController {
  ok (data: any = {}, message = 'success') {
    return new Result({data, message, code: 0});
  }
  
  error (data: any = {}, message = 'error', code = 1) {
    return new Result({data, message, code});
  }

  error400 (data: any = {}, message = '参数错误', code = 400) {
    return new Result({data, message, code});
  }
}
