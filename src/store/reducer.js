

export const profileReducer =(state,action)=>{
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
