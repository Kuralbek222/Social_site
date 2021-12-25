import {combineReducers,createStore} from "redux"
import {profileReducer,DialogsReducer,DialogsR} from './reducer'

let reducers = combineReducers({
    DialogsR,
    DialogsReducer,
    profileReducer,
}
)
let store = createStore(reducers)



export default store;