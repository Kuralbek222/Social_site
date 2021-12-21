import React from "react";
import Styl from './Navbar.module.css'
import SideBar from '../SideBar/SideBar'

import {Link,NavLink} from "react-router-dom"

let objActive=(props) => {
  return props.isActive ? `${Styl.activeLink}` : ''
}

const Navbar =()=>{
    return(
        <nav className='nav'>
        <div className={Styl.stNav} >
          <div>
          <NavLink to='/profile'  className={(props) => objActive(props)}>Профиль</NavLink>
          </div>
          </div>
        <div></div>
        <div className={Styl.stNav}>
          <NavLink to='/dialogs'    className={(props) => objActive(props)} >Сообщения</NavLink>
          </div>
        <div></div>
        <div className={Styl.stNav}>
          <NavLink to='/news'  className={(props) => objActive(props)}>Новости</NavLink>
          </div>
        <div></div>
        <div className={Styl.stNav}>
          <NavLink to='/music'  className={(props) => objActive(props)}>Музыка</NavLink>
          </div>
        <div></div>
        <div className={Styl.stNav}>
          <NavLink to='/settings'  className={(props) => objActive(props)}>Настройки</NavLink>
          </div>
        <div></div>
        <div>
        <SideBar/>
      </div>
      </nav>
     
    )
}
export default Navbar