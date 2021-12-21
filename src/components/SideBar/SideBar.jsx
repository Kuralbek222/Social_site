import React from 'react'
import Styl from './SideBar.module.css'
const SideBar = () => {

    let frienObj =[
        {id:1,name:'Алмат',age:31},
        {id:2,name:'Нурс',age:29}
    ]
    return (
        <div>
            <ul className={Styl.friendsLi}>
            {frienObj.map(obj=>{
                return <li key={obj.id}>{obj.name} {obj.age}</li>
            })}
            </ul>
        </div>
    )
}
export default SideBar;
