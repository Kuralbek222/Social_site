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
const addComment = (text) => {
  console.log(text);
};

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios
      .get(
        `http://192.168.43.143:5000/dataWithUser?_start=${
          this.props.currentPage - 1
        }&_end=${this.props.currentPage + 4}`
      )
      .then((res) => this.props.setUsers(res.data));
  }
  onPageChanged = (e) => {
    // this.props.setCurPage(e);
    console.log(e);
    this.props.setCurPage(e);
    axios
      .get(
        `http://192.168.43.143:5000/dataWithUser?_start=${
          this.props.currentPage - 1
        }&_end=${this.props.currentPage + 4}`
      )
      .then((res) => this.props.setUsers(res.data));
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>Users</div>

        {pages.map((p) => {
          return (
            <span
              key={p}
              className={this.props.currentPage == p && Styl.selectedPage}
              onClick={(e) => {
                this.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}

        <div className={Styl.Usersbody}>
          <div></div>
          {this.props.users.dataWithUser.map((map) => {
            return (
              <UserMap
                key={map.id}
                onFollow={onFollow}
                map={map}
                addComment={addComment}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Users;
