import React from "react";
import Styl from "./Users.module.css";
import styled from "styled-components";
import store from "../../store/store";
import UserMap from "./UserMap/UserMap";
import * as axios from "axios";
import { followAc } from "../../store/UserReducer";

// let toMap = store.getState().UserReducer.dataWithUser;
// console.log(toMap);

const onFollow = () => {
  store.dispatch(followAc());
};

class Users extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.store.dataWithUser);
  }

  componentDidMount() {
    axios
      .get("http://192.168.43.143:5000/dataWithUser")
      .then((res) => console.log(res.data));
  }
  render() {
    return (
      <div>
        <div>Users</div>
        <div className={Styl.Usersbody}>
          <div></div>
          {this.props.store.dataWithUser.map((map) => {
            return <UserMap key={map.id} onFollow={onFollow} map={map} />;
          })}
        </div>
      </div>
    );
  }
}

export default Users;
