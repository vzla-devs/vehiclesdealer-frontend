import { ApplicationMessage } from '@/store/interfaces/applicationMessage'
import { Message } from '@/store/types/message'

export class NotificationMessage implements ApplicationMessage {
  type: Message
  message: string

  constructor (message: string) {
    this.type = Message.Notification
    this.message = message
  }
}
