import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'


let addPostActionCreator = ()=>{
    return {
        type:'ADD-POST'
    }
}


 const MyPosts = (postMessage) => {

    let newPostmessage = React.createRef()
  
    let addpostik=()=>{
        let text = {
            postmessage: newPostmessage.current.value}
        postMessage.addpost(text)
    }

    return (
        <div>
        My post
        <div className={classes.MyPosts__st}>
         <textarea ref={newPostmessage}></textarea>
         <br/><button onClick={addpostik}>add posts</button>
         <button>remove</button>
         {postMessage.postMessage.map(post=>{
            return (<Post post={post} key={post.id}/>)
         })}
       </div>
        </div>
    )
}
export default MyPosts;