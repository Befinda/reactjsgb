import style from './Message.module.css'
export const Message = ({messages}) =>{

    return <ul>
        {messages.map((message,idx)=>(
        <li key={idx}>
            {message.author}: {message.value}
        </li>
        ))}
    </ul>
}