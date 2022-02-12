import React from 'react'
import { connect } from "react-redux";
import Users from './Users'
import { reRender } from "../../store/state";

const mapDispatchToProps  =(dispatch,store)=>{
console.log(store)
return{    
    addMessage: (text)=>{     
    // let action = actionCreatorDialogs(text)
    reRender()
    // dispatch(action)      
}
}
}
const mapStateProps =(store)=>{
    console.log(store)
return{
    store:  store.UserReducer
}
}

const UserContainer = connect(mapStateProps,mapDispatchToProps)(Users)

export default UserContainer