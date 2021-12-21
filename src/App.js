import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

import { BrowserRouter,Routes, Route} from 'react-router-dom'


const App = ()=> {
  return (
  
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      
      <div className='main-content'>
      <Routes>
        <Route path='/profile'  element={<Profile/>}></Route> 
        <Route path='/dialogs' element={<Dialogs/>}></Route> 
        <Route path='/news' element={<News/>}></Route> 
        <Route path='/music' element={<Music/>}></Route> 
        <Route path='/settings' element={<Settings/>}></Route> 
        </Routes>
        </div> 
       
    </div>
 
  );
}

export default App;
