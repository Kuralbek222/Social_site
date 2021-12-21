import React from 'react'
import {Link,NavLink} from "react-router-dom"
import Styl from './DialogItem.module.css'
export const DialogItem = (props) => {
    const DialogsItemsNav = (props)=>{  
        return (
            <div className={Styl.dialog + ' ' + Styl.active}>
                <NavLink to={`/dialogs/`+props.id}>{props.name}</NavLink>
            </div>
        )
    }
    console.log(props)
    
    let divObj = props.data.map((obj)=>{
        return <DialogsItemsNav name={obj.name} id={obj.id} key={obj.id} />
    })
    return (
        <div className={Styl.dialogsItems}>
        {divObj}       
      </div>
    )
}

export default DialogItem;