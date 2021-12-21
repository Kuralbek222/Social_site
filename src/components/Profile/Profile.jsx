import { object } from "prop-types";
import React from "react";
import Store,{dispatch} from "../../store/state";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';





const postMessage = Store._state.postMessage
const getState = Store.getState()
const actionCreatorProfile = ()=>({type:'ADD-POST'})


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
  return dispatch(actionCreatorProfile(),text) 
}
    
const Profile =(state)=>{

    return(
        <div className='main-content'>
          <ProfileInfo/>
      <MyPosts postMessage={postMessage} addpost={addPost}/>
      </div>
    )
}

export default Profile;