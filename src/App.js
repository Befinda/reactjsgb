import { useEffect, useState } from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { Message } from './components/Message/Message';
// import { FormClass } from './components/FormClass';

export const App = () => {
  const[messages, setMesssages] = useState([])

  const addMessage = (newMessage)=>{
    setMesssages((prevMessages)=>[...prevMessages, newMessage]);
  }
  useEffect(()=>{
    if(messages.length>0 
      && messages[messages.length-1].author === 'USER')
    {
      const timeout = setTimeout(()=>{
        addMessage({
          author: 'BOT',
          value: "I'm BOT",
        });
      },1000);
      return()=> clearTimeout(timeout);
    }
  }, [messages])
  return (
    <div className="App">
      <Message messages = {messages}/>
      <Form addMessage={addMessage}/>

      {/* <FormClass /> */}
    </div>
  );
}


