import React,{useState} from 'react'
import Styl from './Post.module.css'


 const Post = (post) => {
     const imgLike1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg6faJZ5NDf7tBQpitdKMjixB9WDlIi8elsg&usqp=CAU'
    const imgLike2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkK5kPkW77mABMveSgc_pI4gU84mQbSuvVafal3EE5mkXt01_E443b183lZ87OaVct_o&usqp=CAU'
    let avatarArr =[
        {id:1,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNslP7-_P7jz5MrT5yhW14y_IzBDbZZT0ag&usqp=CAU'}
    ]
    const [state, setstate] = useState(imgLike1)

     const likeChange = ()=>{
     state===imgLike1?setstate(imgLike2):setstate(imgLike1)
    }
    console.log(avatarArr[0].img)


    return (
        <div>
         <div className={Styl.item}>   
          <div><img src={avatarArr[0].img}/></div>
          <div><button  className={Styl.stLike}><img onClick={likeChange}  src={state}/></button></div>
          <br/> 
          </div>
          <div>{post.post.postmessage}</div>
        </div>
    )
}
export default Post;