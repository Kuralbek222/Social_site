import React from 'react'
import './App.css';
import {Provider} from "./store/StoreContext"
import store from './store/store'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import DialogsContainer from './components/Dialogs/DialogsContainer'
// import Message from './components/Dialogs/Message/Message'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Users from './components/Users/Users'
import UserContainer from './components/Users/UserContainer'
import { BrowserRouter,Routes, Route} from 'react-router-dom'


const App = ()=> {
  return (
    <Provider store={store}>
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='main-content'>
      <Routes>
        <Route path='/profile'  element={<Profile/>}></Route> 
        <Route path='/dialogs' element={<DialogsContainer store={store}/>}></Route> 
        <Route path='/news' element={<News/>}></Route> 
        <Route path='/music' element={<Music/>}></Route> 
        <Route path='/settings' element={<Settings/>}></Route>
        <Route path='/users' element={<UserContainer  store={store}/>}></Route>
        {/* <Route
          path="/dialogs/1"
          element={<Message data= {store.getState().DialogsReducer.dataWithUser}/>}
        ></Route> */}
        </Routes>
        </div> 
    </div>
    </Provider>
 
  );
}

export default App;
