
export const actionCreatorProfile =  (text) => ({type:'ADD-POST',text})

let initialState ={
        postMessage :[
        {id:1,postmessage:'Hello', likeCount:0},
        {id:2,postmessage:'I like', likeCount:0},
        {id:3,postmessage:'You', likeCount:0},
        {id:4,postmessage:'My friend', likeCount:0}
    ]
}

export const profileReducer = (state = initialState,action)=>{
    if (action.type === 'ADD-POST'){
            let newPost ={
                id: state.postMessage.length +1,
                postmessage: action.text,
                likeCount:0,
            }; 
            state.postMessage.push(newPost)         
    return state
}
}
