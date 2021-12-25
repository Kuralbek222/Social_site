import { func, object } from "prop-types";
import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { actionCreatorProfile } from "../../store/reducer";
import { reRender } from "../../store/state";
import StoreContext from "../../store/StoreContext";

const Profile = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addPost = (text) => {
          store.dispatch(actionCreatorProfile(text));
          reRender();
        };
        return (
          <div className="main-content">
            <ProfileInfo />
            <MyPosts postMessage={store.getState()} addpost={addPost} />
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default Profile;
