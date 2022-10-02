import { FC, useState } from 'react';
import { Chat } from 'src/types';
import { customAlphabet } from 'nanoid';
import { ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

const nanoid = customAlphabet('1234567890', 10);

interface ChatListProps {
  chats: Chat[];
  onAddChat: (chat: Chat) => void;
}

export const ChatList: FC<ChatListProps> = ({ chats, onAddChat }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      onAddChat({
        id: nanoid(),
        namechat: value,
      });
      setValue('');
    }
  };
  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.namechat}</Link>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button>create chat</button>
      </form>
    </>
  );
};
