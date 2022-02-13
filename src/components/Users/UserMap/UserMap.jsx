import React from "react";
import Styl from "../Users.module.css";
import styled from "styled-components";

const Otstup = styled.a`
  padding: 10px;
`;
const UserMap = (props) => {
  // console.log(props.map.name);
  return (
    <div>
      <div className={Styl.mainContainer}>
        <div>
          <div className={Styl.telo}>
            <div>
              <div>
                <img className={Styl.for_icon} src="simple.png"></img>
              </div>
              <div>
                <button onClick={props.onFollow}>follow</button>
              </div>
            </div>
            <div className={Styl.second}>
              <div>{props.map.name}</div>
              <div>
                {props.map.location.city} {props.map.location.country}
              </div>
              <div>{props.map.id}!</div>
            </div>
          </div>
        </div>
        <input className={Styl.dialog_message}></input>
        <button className={Styl.dialog_button}>написать</button>
      </div>
      <Otstup />
    </div>
  );
};
export default UserMap;
