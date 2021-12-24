import {profileReducer} from './reducer'

let reRender = ()=> {
    console.log('state is changed')
}



let store = {
    _state : {
        postMessage :[
        {id:1,postmessage:'Hello', likeCount:0},
        {id:2,postmessage:'I like', likeCount:0},
        {id:3,postmessage:'You', likeCount:0},
        {id:4,postmessage:'My friend', likeCount:0}
    ]
},

 getState(){
    return this._state.postMessage
},
 diSpatch(action){
    //  console.log(action)
    profileReducer(this._state,action)   
   
    reRender()      
        },
}
 
 export const subscribe = (observer)=>{   
    reRender = observer
 }
 export let dispatch = store.diSpatch.bind(store)
 export let getST = store.getState.bind(store)


export default store;