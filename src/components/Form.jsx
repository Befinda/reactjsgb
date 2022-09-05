import { useState } from "react";
import { Message } from "./Message"

export const Form = () =>{
    const [tMes, setTMes] = useState()

const handleSubmit=(ev)=>{
    ev.preventDefault();
    setTMes(ev.target[0].value);
    ev.target[0].value = '';
}

    return <form onSubmit={handleSubmit} className ="formmes">
        <Message textMes = {tMes}/>
        <div className="wrap">
        <input className = "formmes-input" type="text"/>
        <button className = "formmes-btn" type="submit">Отправить</button>
        </div>
    </form>
}