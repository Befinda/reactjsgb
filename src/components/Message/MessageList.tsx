import style from './MessageList.module.css';
import { FC } from 'react';
import { Message } from 'src/types';

interface MessageListProps {
  messages: Message[];
}

export const MessageList: FC<MessageListProps> = ({ messages }) => {
  return (
    <ul className={style.message}>
      {messages.map((message, idx) => (
        <li
          key={idx}
          className={message.author === 'BOT' ? style.bot : ''}
          data-testid="itemlist"
        >
          {message.author}: {message.value}
        </li>
      ))}
    </ul>
  );
};
