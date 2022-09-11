import style from './Message.module.css'
export const Message = (props) =>{

    return <p className={style.message}>Сообщение: {props.textMes}</p>
}