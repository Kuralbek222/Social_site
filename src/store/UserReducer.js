import {initDialState} from './reducer'
import _ from 'lodash'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
export const UserReducer = (state = initDialState,action  ) => {
    let stateCopy = _.cloneDeep(state)
    switch(action.type){
        case FOLLOW: 
            console.log(stateCopy)
        default:
            return stateCopy;
    }
}

export const followAc =(userId)=> ({type:'FOLLOW', userId})
export const unfollowAc =(userId)=> ({type:'UNFOLLOW', userId})

