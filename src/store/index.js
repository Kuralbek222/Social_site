import {combineReducers,createStore} from "redux"
import {profileReducer} from './reducer'

let reducers = combineReducers(
    profileReducer
)
let store = createStore(reducers)


export default store;