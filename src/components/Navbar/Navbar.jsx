import React from "react";
import Styl from "./Navbar.module.css";
import SideBar from "../SideBar/SideBar";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Otstup = styled.a`
  padding: 10px;
`;
let objActive = (props) => {
  return props.isActive ? `${Styl.activeLink}` : "";
};

const Navbar = () => {
  return (
    <nav className="nav">
      <div className={Styl.stNav}>
        <div>
          <NavLink to="/profile" className={(props) => objActive(props)}>
            Профиль
          </NavLink>
        </div>
      </div>
      <div></div>
      <div className={Styl.stNav}>
        <NavLink to="/dialogs" className={(props) => objActive(props)}>
          Сообщения
        </NavLink>
      </div>
      <div className={Styl.Otstup}></div>
      <div className={Styl.stNav}>
        <NavLink to="/news" className={(props) => objActive(props)}>
          Новости
        </NavLink>
      </div>
      <div></div>
      <div className={Styl.stNav}>
        <NavLink to="/music" className={(props) => objActive(props)}>
          Музыка
        </NavLink>
      </div>
      <div></div>
      <Otstup></Otstup>
      <div className={Styl.stNav}>
        <NavLink to="/users" className={(props) => objActive(props)}>
          Users
        </NavLink>
      </div>
      <div></div>
      <Otstup></Otstup>
      <div className={Styl.stNav}>
        <NavLink to="/settings" className={(props) => objActive(props)}>
          Настройки
        </NavLink>
      </div>
      <Otstup></Otstup>
      <div>
        <SideBar />
      </div>
    </nav>
  );
};
export default Navbar;
