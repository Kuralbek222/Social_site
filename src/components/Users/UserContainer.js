import React from 'react'
import { connect } from "react-redux";
import Users from './Users'
import { reRender } from "../../store/state";
import { followAc,setUsersAc,setCurPageAc } from "../../store/UserReducer";

const mapDispatchToProps  =(dispatch)=>{
return{    
    addfollow: (UserId)=>{
     dispatch(followAc(UserId))   
    //  reRender()
    },
    setCurPage:(p)=>{
        dispatch(setCurPageAc(p))
    },
    setUsers: (Users) => {
        dispatch(setUsersAc(Users))
    }
}
}
const mapStateProps =(state)=>{
return{
    users:  state.UserReducer,
    pageSize: state.UserReducer.pageSize,
    totalUserCount:state.UserReducer.totalUserCount,
    currentPage: state.UserReducer.currentPage,
}
}

const UserContainer = connect(mapStateProps,mapDispatchToProps)(Users)

export default UserContainer