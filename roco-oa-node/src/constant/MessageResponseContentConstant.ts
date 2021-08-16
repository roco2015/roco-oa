import { help } from '@/constant/MessageRequestContentConstant';

export const helpMessage = `\
### 小机器人帮助\n\
1. ${help.join('|')}： 查看帮助\n\
2. 需求|查看需求： 查看本群（群聊）或自己（单聊）的需求\n\
3. 绑定需求： （群聊）下绑定群和需求\n\
4. 新增需求|录入需求|加需求： 新增需求\n\
5. 需求加人： 给需求加人\n\
`;
