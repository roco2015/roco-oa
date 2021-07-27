import { Result } from '@/bean/Result';

export abstract class BaseController {
  ok (data: Record<string, unknown> = {}, message = 'success') {
    return new Result({data, message, code: 0});
  }
  
  error (data: Record<string, unknown> = {}, message = 'error', code = 1) {
    return new Result({data, message, code});
  }
}
