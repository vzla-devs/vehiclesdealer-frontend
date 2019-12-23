import { ApplicationMessage } from '@/store/models/applicationMessage'
import { Message } from '@/store/types/message'

export class ErrorMessage implements ApplicationMessage {
  type: Message
  message: string

  constructor (message: string) {
    this.type = Message.Error
    this.message = message
  }
}
