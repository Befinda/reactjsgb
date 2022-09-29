import style from './MessageList.module.css';
import { FC } from 'react';
import { Message } from 'src/types';
import { List, ListItem } from '@mui/material';

interface MessageListProps {
  messages: Message[];
}

export const MessageList: FC<MessageListProps> = ({ messages }) => {
  return (
    <List className={style.message}>
      {messages.map((message, idx) => (
        <ListItem
          key={idx}
          className={message.author === 'BOT' ? style.bot : ''}
          data-testid="itemlist"
        >
          {message.author}: {message.value}
        </ListItem>
      ))}
    </List>
  );
};
