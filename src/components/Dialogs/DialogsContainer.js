import React from 'react'
import { connect } from "react-redux";
import Dialogs from "./Dialogs"
import { actionCreatorDialogs } from "../../store/reducer";
import { reRender } from "../../store/state";
import StoreContext from "../../store/StoreContext";

// const mapStateToProps = (state)=>{
//     console.log(state)
//     return {
//         ldataWithUser: state
//     }
// }
//  const DialogsContainer1 =(store)=>{
//       console.log(store);
//      const addMessage =(text)=>{
//         let action = actionCreatorDialogs(text)
//         store.store.dispatch(action)
//         reRender()
//      }
//     return (
//         <Dialogs store={store.store.getState().DialogsReducer} addMessage={addMessage}/>
//     )
// }
const mapDispatchToProps =(dispatch,store)=>{
    console.log(store)
    return{    
        addMessage: (text)=>{     
        let action = actionCreatorDialogs(text)
        reRender()
        dispatch(action)      
    }
}
}
const mapStateProps =(store)=>{
    return{
        store:  store.DialogsReducer
    }
}
const DialogsContainer = connect(mapStateProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer