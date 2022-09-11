import { useState } from "react";
import { Message } from "../Message/Message"
import style from "./Form.module.css"

export const Form = () =>{
    const [tMes, setTMes] = useState()

const handleSubmit=(ev)=>{
    ev.preventDefault();
    setTMes(ev.target[0].value);
    ev.target[0].value = '';
}

    return <form onSubmit={handleSubmit} className ={style.formmes}>
        <Message textMes = {tMes}/>
        <div className={style.wrap}>
        <input className = {style.formmesInput} type="text"/>
        <button className = {style.formmesBtn} type="submit">Отправить</button>
        </div>
    </form>
}