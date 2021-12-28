import {combineReducers,createStore} from "redux"
import {profileReducer,DialogsReducer,DialogsR} from './reducer'
import {UserReducer} from './UserReducer'

let reducers = combineReducers({
    UserReducer,
    DialogsR,
    DialogsReducer,
    profileReducer,
}
)
let store = createStore(reducers)



export default store;