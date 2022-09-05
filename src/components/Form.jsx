import { useState } from "react";
import { Message } from "./Message"

export const Form = () =>{
    const [tMes, setTMes] = useState()

const handleSubmit=(ev)=>{
    ev.preventDefault();
    setTMes(ev.target[0].value);
    ev.target[0].value = '';
}

    return <form onSubmit={handleSubmit}>
        <Message textMes = {tMes}/>
        <input type="text"/>
        <button type="submit">Отправить</button>
    </form>
}