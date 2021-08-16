import { service, inject } from 'daruk';
import { helpMessage } from '@/constant/MessageResponseContentConstant';
import { DemandService } from '@/service/DemandService';
import { Demand } from '@/entities/Demand';
import { isQa, isFe, isBe, isPm } from '@/utils/RoleUtils';
import { DemandPeople } from '@/entities/DemandPeople';

@service()
export class MessageService {

  @inject('DemandService')
  private demandService: DemandService;

  public getHelloMessage () {
    return this.getTextMessage('ギルモン　進化');
  }

  public getHelpMessage () {
    const markdownContent = helpMessage;
    return this.getMarkdownMessage(markdownContent, '[机器人帮助]');
  }

  public async getDemandMessage () {
    const demandList = await this.demandService.getDemandList({demandName: '777羌胡23'}, true);
    const formatContent = this.formatDemandMessageContent(demandList);
    return this.getActionCardMessage(formatContent, '[需求排期]');
  }

  private getTextMessage (content: string) {
    return {
      msgtype: 'text',
      text: { content }
    };
  }

  private getMarkdownMessage (text: string, title: string) {
    return {
      msgtype: 'markdown',
      markdown: { title, text }
    };
  }

  private getActionCardMessage (text: string, title: string) {
    return {
      msgtype: 'actionCard',
      actionCard: {
        title,
        text,
        btnOrientation: '1',
        btns: [
          {
            title: '立即编辑', 
            actionURL: 'https://www.baidu.com/'
          }, 
        ]
      },
    };
  }

  private formatDemandMessageContent (demandList: Demand[]) {
    let messageContent = '';
    demandList.forEach(demand => {
      messageContent += `### [${demand.demandName}](${demand.wikiUrl})\n\n`;
      messageContent += `评审时间：${demand.reviewDate}\n\n`;
      messageContent += `计划上线：${demand.planOnlineDate}\n\n`;
      const be: DemandPeople[] = []; // 后端
      const fe: DemandPeople[] = []; // 前端
      const qa: DemandPeople[] = []; // 测试
      const pm: DemandPeople[] = []; // 产品
      demand.demandPeople.forEach(person => {
        if (isBe(person.roleId)) { be.push(person); return; }
        if (isFe(person.roleId)) { fe.push(person); return; }
        if (isQa(person.roleId)) { qa.push(person); return; }
        if (isPm(person.roleId)) { pm.push(person); return; }
      });
      if (be.length) {
        messageContent += '后端\n\n';
        be.forEach(person => {
          messageContent += `> @${person.userName} 开发${person.developDate.substr(5)} | 联调${person.debugDate.substr(5)} | 提测${person.submitTestDate.substr(5)}\n\n`;
        });
      }
      if (fe.length) {
        messageContent += '前端\n\n';
        fe.forEach(person => {
          messageContent += `> @${person.userName} 开发${person.developDate.substr(5)} | 联调${person.debugDate.substr(5)} | 提测${person.submitTestDate.substr(5)}\n\n`;
        });
      }
      if (qa.length) {
        messageContent += '测试\n\n';
        qa.forEach(person => {
          messageContent += `> @${person.userName} 开始测试${person.startTestDate.substr(5)} | 测试完成${person.finishTestDate.substr(5)}\n\n`;
        });
      }

      messageContent += '------------------------------------------------\n\n';
    });
    return messageContent;
  }
}
