import { ApplicationMessage } from '@/store/models/applicationMessage'
import { Message } from '@/store/types/message'

export class NotificationMessage implements ApplicationMessage {
  type: Message
  message: string

  constructor (message: string) {
    this.type = Message.Notification
    this.message = message
  }
}
