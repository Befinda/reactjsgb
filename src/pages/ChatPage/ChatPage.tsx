import { FC, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ChatList } from 'src/components/ChatList';
import { Form } from '../../components/Form/Form';
import { MessageList } from 'src/components/Message/MessageList';
import { Chat, Message, Messages } from 'src/types';
// import style from './ChatPage.module.css';

// import { WithClasses } from './../../HOC/WithClasses';

interface ChatPageProps {
  chats: Chat[];
  onAddChat: (chat: Chat) => void;
  onDeleteChat: (chat: Chat) => void;
  messages: Messages;
  onAddMessage: (chatId: string, msg: Message) => void;
}
export const ChatPage: FC<ChatPageProps> = ({
  chats,
  onAddChat,
  onDeleteChat,
  messages,
  onAddMessage,
}) => {
  const { chatId } = useParams();
  // const MessageListWithClass = WithClasses(MessageList);

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author === 'USER'
    ) {
      const timeout = setTimeout(() => {
        onAddMessage(chatId, {
          author: 'BOT',
          value: 'Im BOT',
        });
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [chatId, messages, onAddMessage]);

  if (chatId && !messages[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <ChatList
        chats={chats}
        onAddChat={onAddChat}
        onDeleteChat={onDeleteChat}
      />
      <MessageList messages={chatId ? messages[chatId] : []} />

      {/* <MessageListWithClass
        messages={chatId ? messages[chatId] : []}
        classes={style.border}
      /> */}
      <Form addMessage={onAddMessage} />
    </>
  );
};
