import React from 'react'
import classes from './MyPosts.module.css'

 const MyPosts = () => {
    return (
        <div>
        My post
        <div className={classes.MyPosts__st}>
         <textarea></textarea>
         <button>add posts</button>
         <button>remove</button>
        </div>
        <div >
            <div >
          post1
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNslP7-_P7jz5MrT5yhW14y_IzBDbZZT0ag&usqp=CAU'/>
          </div>
          
        </div>
      </div>
    )
}
export default MyPosts;