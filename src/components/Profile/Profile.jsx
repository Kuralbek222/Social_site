import { func, object } from "prop-types";
import React from "react";
import Store,{dispatch,getST} from "../../store/state";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import subscribe from '../../store/state'









// const actionCreatorProfile = ()=>({type:'ADD-POST'})


// let addPost=(text)=>{
//   let obj = {id:postMessage.length + 1}
//   postMessage.push(Object.assign(obj,text))
//   console.log(postMessage)
// }
const addPost =(text)=>{
  let action = {
    type: 'ADD-POST',
    text,
  }
  return dispatch(action) 
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