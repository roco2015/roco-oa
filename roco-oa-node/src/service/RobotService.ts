import { service, inject } from 'daruk';
import { MessageService } from '@/service/MessageService';
import { DingtalkService } from '@/service/DingtalkService';
import { UserService } from '@/service/UserService';
import { $http } from '@/plugins/ajax';
import { help, demand, createDemand, updateUser } from '@/constant/MessageRequestContentConstant';

@service()
export class RobotService {

  @inject('MessageService')
  private messageService: MessageService;

  @inject('DingtalkService')
  private dingtalkService: DingtalkService;

  @inject('UserService')
  private userService: UserService;
  
  public async sendMessage (sessionWebhook: string, message: any) {
    try {
      await $http.post(sessionWebhook, message);
    } catch (err) {
      console.log(err.response.data);
    }
  }

  public async handleMessage (message: Record<string, unknown>) {
    console.log(message);
    const sessionWebhook = message.sessionWebhook;
    if (typeof sessionWebhook !== 'string') {
      return;
    }
    const messageContent = ((message?.text as Record<string, unknown>)?.content as string || '')?.trim();
    let messageResponse;
    switch (true) {
      case help.includes(messageContent):
        messageResponse = this.messageService.getHelpMessage();
        break;
      case demand.includes(messageContent):
        messageResponse = await this.messageService.getDemandMessage();
        break;
      case createDemand.includes(messageContent):
        messageResponse = this.messageService.getCreateDemandMessage();
        break;
      case updateUser.includes(messageContent):
        const users = await this.dingtalkService.getDepartmentUserList();
        const updatedUsers = await this.userService.updateUsers(users);
        messageResponse = this.messageService.getUpdatePeopleMessage(updatedUsers.length);
        break;
      default: messageResponse = this.messageService.getHelloMessage(); break;
    }
    console.log(messageResponse);
    if (messageResponse) {
      this.sendMessage(sessionWebhook, messageResponse);
    }
  }
}
