export const enum MessageType { success, info, warn, error }

export interface Message {
  content: string,
  type: MessageType
}
