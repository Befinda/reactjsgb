export interface Message {
  author: string;
  value: string;
}
export type Messages = Record<string, Message[]>;

export interface Chat {
  id: string;
  namechat: string;
}

export type Chats = Chat[];
