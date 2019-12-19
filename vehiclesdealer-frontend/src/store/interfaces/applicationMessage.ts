import { Message } from '@/store/types/message'

export interface ApplicationMessage {
  type: Message,
  message: string
}
