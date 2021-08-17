import { help, demand, createDemand, updateUser } from '@/constant/MessageRequestContentConstant';

export const helpMessage = `\
### 小机器人帮助\n\
1. ${help.join('|')}： 查看帮助\n\
2. ${demand.join('|')}： 查看本群（群聊）或自己（单聊）的需求\n\
3. ${createDemand.join('|')}： 新增需求\n\
4. 需求加人： 给需求加人\n\
5. ${updateUser.join('|')}：全量更新人员\n\
`;
