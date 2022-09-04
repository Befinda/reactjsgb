import { useState } from "react";
import { Message } from "./Message"

export const Form = () =>{
    const [tMes, setTMes] = useState()

    const handleChange=(ev)=>{
setTMes( ev.target.value)
}
    return <form>
        {/* <p>Count: {count}</p> */}
        {/* <input type = "text"/> */}
        {/* <button type="button">click</button> */}
        <input type="text" onChange={handleChange}/>
        <Message textMes = {tMes}/>
    </form>
}