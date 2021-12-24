import { func, object } from "prop-types";
import React from "react";
import Store,{dispatch,getST} from "../../store/state";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {actionCreatorProfile} from '../../store/reducer'

const addPost =(text)=>{
  return dispatch(actionCreatorProfile(text)) 
}
  const Profile =(state)=>{
    return(
        <div className='main-content'>
          <ProfileInfo/>
      <MyPosts postMessage={getST()} addpost={addPost}/>
      </div>
    )
}

export default Profile;