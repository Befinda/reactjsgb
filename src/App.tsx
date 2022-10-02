import { useState, FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Chats, Chat, Messages, Message } from './types';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { ChatList } from './components/ChatList/ChatList';
import { ChatPage } from './pages/ChatPage';
import { Header } from './components/Header';

const defaultChats: Chat[] = [
  { id: '1', namechat: 'First chat' },
  { id: '2', namechat: 'Second chat' },
];
const defaultMessages: Messages = {
  '1': [{ author: 'USER', value: 'hello, world' }],
  '2': [{ author: 'BOT', value: 'hello, im bot' }],
};
export const App: FC = () => {
  const [chats, setChats] = useState<Chats>(defaultChats);
  const [messages, setMessages] = useState<Messages>(defaultMessages);

  const onAddChat = (newChat: Chat) => {
    setChats([...chats, newChat]);
    setMessages({
      ...messages,
      [newChat.id]: [],
    });
  };

  const onDeleteChat = (itemChat: Chat) => {
    setChats(chats.filter((item) => item.id != itemChat.id));
  };

  const onAddMessage = (chatId: string, newMessage: Message) => {
    setMessages({
      ...messages,
      [chatId]: [...messages[chatId], newMessage],
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chats">
          <Route
            index
            element={
              <ChatList
                chats={chats}
                onAddChat={onAddChat}
                onDeleteChat={onDeleteChat}
              />
            }
          />
          <Route
            path=":chatId"
            element={
              <ChatPage
                chats={chats}
                onAddChat={onAddChat}
                onDeleteChat={onDeleteChat}
                messages={messages}
                onAddMessage={onAddMessage}
              />
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<div>404 page</div>} />
    </Routes>
  );
};
