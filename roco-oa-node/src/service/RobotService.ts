import { service, inject } from 'daruk';
import { MessageService } from '@/service/MessageService';
import { $http } from '@/plugins/ajax';
import { help, demand } from '@/constant/MessageRequestContentConstant';

@service()
export class RobotService {

  @inject('MessageService')
  private messageService: MessageService;
  
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
      case help.includes(messageContent): messageResponse = this.messageService.getHelpMessage(); break;
      case demand.includes(messageContent): messageResponse = await this.messageService.getDemandMessage(); break;
      default: messageResponse = this.messageService.getHelloMessage(); break;
    }
    this.sendMessage(sessionWebhook, messageResponse);
  }
}
