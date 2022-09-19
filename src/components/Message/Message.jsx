import style from './Message.module.css';
export const Message = ({ messages }) => {
  return (
    <ul className={style.message}>
      {messages.map((message, idx) => (
        <li key={idx} className={message.author === 'BOT' ? style.bot : ''}>
          {message.author}: {message.value}
        </li>
      ))}
    </ul>
  );
};
