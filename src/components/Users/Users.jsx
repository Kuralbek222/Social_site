import React from "react";
import Styl from "./Users.module.css";
import styled from "styled-components";
import store from "../../store/store";
import UserMap from "./UserMap/UserMap";
import { followAc } from "../../store/UserReducer";

let toMap = store.getState().UserReducer.dataWithUser;
console.log(toMap.map((map) => console.log(map.location)));

const onFollow = () => {
  store.dispatch(followAc());
};

export const Users = () => {
  return (
    <div>
      <div>Users</div>
      <div className={Styl.Usersbody}>
        <div></div>
        {toMap.map((map) => {
          return <UserMap key={map.id} onFollow={onFollow} map={map} />;
        })}
      </div>
    </div>
  );
};
export default Users;
