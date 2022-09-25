import { useEffect, useState, FC } from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { MessageList } from './components/Message/MessageList';
import { Message, Messages } from './types';
// import { FormClass } from './components/FormClass';

export const App: FC = () => {
  const [messages, setMesssages] = useState<Messages>([]);

  const addMessage = (newMessage: Message) => {
    setMesssages((prevMessages) => [...prevMessages, newMessage]);
  };
  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author === 'USER'
    ) {
      const timeout = setTimeout(() => {
        addMessage({
          author: 'BOT',
          value: "I'm BOT",
        });
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [messages]);
  return (
    <div className="App">
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />

      {/* <FormClass /> */}
    </div>
  );
};
