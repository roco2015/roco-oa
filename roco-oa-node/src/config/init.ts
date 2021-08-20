import { getManager } from 'typeorm';
import { User } from '@/entities/User';
import { Role } from '@/entities/Role';
import localCache from '@/config/LocalCache';

export default async () => {
  const entityManager = getManager();
  const users = await entityManager.find(User);
  users.forEach(user => {
    localCache.userObj[user.userId] = user.userName;
  });
  const roles = await entityManager.find(Role);
  roles.forEach(role => {
    localCache.roleObj[role.roleId] = role.positionName;
  });
};
