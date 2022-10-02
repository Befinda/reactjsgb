import { FC, useState } from 'react';
import { Chat } from 'src/types';
import { customAlphabet } from 'nanoid';
import { ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

const nanoid = customAlphabet('1234567890', 10);

interface ChatListProps {
  chats: Chat[];
  onAddChat: (chat: Chat) => void;
  onDeleteChat: (chat: Chat) => void;
}

export const ChatList: FC<ChatListProps> = ({
  chats,
  onAddChat,
  onDeleteChat,
}) => {
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
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const delChat = chats.find((item) => item.id == e.currentTarget.dataset.id);
    if (delChat) {
      onDeleteChat(delChat);
    }
  };
  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.namechat}</Link>
            <button data-id={chat.id} onClick={handleClick}>
              delete chat
            </button>
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
