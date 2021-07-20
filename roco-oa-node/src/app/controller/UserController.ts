import {getManager} from 'typeorm';
import {User} from '../../entities/User';

export class UserController {
  getAll() {
    return getManager().find(User);
  }
}
