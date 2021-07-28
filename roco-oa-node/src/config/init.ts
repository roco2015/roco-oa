import { getManager } from 'typeorm';
import { User } from '@/entities/User';
import localCache from '@/config/localCache';

export default async () => {
  const entityManager = getManager();
  const users = await entityManager.find(User);
  users.forEach(user => {
    localCache.userMap.set(user.userId, user.userName);
  });
};
