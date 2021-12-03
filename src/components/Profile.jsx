import React from "react";

import colibtri from '../img/colibri.jpg';
import MyPosts from './MyPosts'

const Profile =()=>{
    return(
        <div className='main-content'>
        <img src={colibtri}/>
      <div>
        Ava + desc
      </div>
      <MyPosts/>
      </div>
    )
}

export default Profile;