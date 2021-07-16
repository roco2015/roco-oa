import {getManager, getRepository} from 'typeorm';
import {User} from '../../entities/User';

export class UserController {
  @Get("/users")
  getAll() {
      return getManager().find(User);
  }

  @Get("/users/:id")
  getAll(@Param("id") userId: number) {
      return getRepository(User).findOne(userId);
  }
}