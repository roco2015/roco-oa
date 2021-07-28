import { service } from 'daruk';
import { User } from '@/entities/User';
import localCache from '@/config/localCache';

@service()
export class UserService {

  public async getAllUser() {
    const options = { cache: true };
    const users: User[] = await User.find(options);
    localCache.userMap = new Map();
    users.forEach(user => {
      localCache.userMap.set(user.userId, user.userName);
    });
    return users;
  }
}
