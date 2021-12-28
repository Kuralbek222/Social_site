import React from "react";
import Styl from "../Users.module.css";
import styled from "styled-components";

const Otstup = styled.a`
  padding: 10px;
`;
const UserMap = (props) => {
  console.log(props.map.name);
  return (
    <div>
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
            <div>Hello,everybody oooo!!!!</div>
          </div>
        </div>
      </div>
      <Otstup />
    </div>
  );
};
export default UserMap;
