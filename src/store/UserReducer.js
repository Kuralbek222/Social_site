import {initDialState} from './reducer'
import * as axios from "axios"
import _ from 'lodash'

// export const actionCreatorDialogs =  (text) => ({type:'ADD-Dial',text})
// export const followAc =(UserId)=>({type:'FOLLOW',UserId}) 
// export const unfollowAc =(UserId)=>({type:'UNFOLLOW',UserId}) 
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'


export const UserReducer = (state = initDialState,action) => {  

    let stateCopy = _.cloneDeep(state)
    switch(action.type){
        case 'FOLLOW': 
            console.log('FOLLOW')
        case 'UNFOLLOW':
            console.log('UNFOLLOW')
        case 'SETUSERS':
             Object.assign(stateCopy.dataWithUser,action.Users) 
        case 'SETCURPAGE':
            console.log(action.type)
        default:
            return stateCopy;
    }
}

export const setCurPageAc = (p) => ({type:'SETCURPAGE',p})
export const setUsersAc = ( Users) => ({ type: 'SETUSERS', Users})
export const followAc =(userId)=> ({type:'FOLLOW', userId})
export const unfollowAc =(userId)=> ({type:'UNFOLLOW', userId})

