import React from 'react'
import Styl from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'



 const Dialogs = () => {
let dataWithUser =[
    {id:1, name:'Алмат'},
    {id:2, name:'Саша'},
    {id:3, name:'Бауыржан'},
    {id:4, name:'Нурсултан'},
    {id:5, name:'Диана'},
]
let dataMessage = [
    {id:1,message:'HI'},
    {id:2,message:'How are you'},
    {id:3,message:'what are you doing'}
]
    return (
        <div className={Styl.dialogs}>
          <DialogItem data={dataWithUser} />
        <Message data={dataMessage}/>
        </div>
    )
}

export default Dialogs;