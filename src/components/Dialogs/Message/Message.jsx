import React from 'react'
import Styl from './Message.module.css'

export const Message = (props) => {
    
const Messages = (props)=>{
    return (
    <div className={Styl.dialog}>
        {props.message}
    </div>
    )
}

    return (
        <div className={Styl.messages}>
            {props.data.map(obj=>{
                return <Messages message={obj.message} key={obj.id}/>
            })}
        </div>
    )
}
export default Message
