import React, { useState } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (postMessage) => {
  const [state, setstate] = useState();
  let addpostik = () => {
    postMessage.addpost(state);
  };

  let postMes = postMessage.postMessage.profileReducer.postMessage;
  return (
    <div>
      My post
      <div className={classes.MyPosts__st}>
        <textarea onChange={(e) => setstate(e.target.value)}></textarea>
        <br />
        <button onClick={addpostik}>add posts</button>
        <button>remove</button>
        {postMes.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};
export default MyPosts;
