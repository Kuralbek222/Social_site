
export const actionCreatorProfile =  (text) => ({type:'ADD-POST',text})
export const actionCreatorDialogs =  (text) => ({type:'ADD-Dial',text})

let initialState ={
        postMessage :[
        {id:1,postmessage:'Hello', likeCount:0 },
        {id:2,postmessage:'I like', likeCount:0},
        {id:3,postmessage:'You', likeCount:0},
        {id:4,postmessage:'My friend', likeCount:0}
    ]
}

export const profileReducer = (state = initialState,action)=>{
    if (action.type === 'ADD-POST'){
        console.log(initialState)
            let newPost ={
                id: state.postMessage.length +1,
                postmessage: action.text,
                likeCount:0,
            }; 
            state.postMessage.push(newPost) 
}
return state;
}

let initial = {
    ldataWithUser :[
        {id:1, name:'Алмат'},
        {id:2, name:'Саша'},
    ]
}
export const DialogsR = (state = initial,action)=>{
    if (action.type === 'ADD-D'){
        let newPost ={
            id: state.postMessage.length +1,
            postmessage: action.text,
            likeCount:0,
        }; 
        state.postMessage.push(newPost) 
    }
    return state;
}


export let initDialState = {
    dataWithUser :[
        {id:1, name:'Алмат',
        location:{city:'Almaty',country:'Kazakhstan'}},
        {id:2, name:'Саша',
        location:{city:'Almaty',country:'Kazakhstan'}},
        {id:3, name:'Бауыржан',
        location:{city:'Almaty',country:'Kazakhstan'}},
        {id:4, name:'Нурсултан',
        location:{city:'Nursultan',country:'Kazakhstan'}},
        {id:5, name:'Диана',
        location:{city:'Almaty',country:'Kazakhstan'}},
    ],
    dataMessage :[
        {id:1,message:'HI'},
    ]
}
export const DialogsReducer = (state = initDialState,action)=>{
    let stateCopy = {...state}
    if (action.type === 'ADD-Dial'){  
            let newMess ={
                id: stateCopy.dataMessage.length +1,
                message: action.text,
                likeCount:0,
            }; 
            stateCopy.dataMessage.push(newMess) 
}
return stateCopy;
}