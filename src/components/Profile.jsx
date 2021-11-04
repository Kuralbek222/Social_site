import React from "react";

import colibtri from '../img/colibri.jpg';

const Profile =()=>{
    return(
        <div className='main-content'>
        <img src={colibtri}/>
      <div>
        Ava + desc
      </div>
      <div>
        My post
        <div>
          new post
        </div>
        <div>
          <div>post1</div>
          <div>post2</div>
        </div>
      </div>
      </div>
    )
}

export default Profile;