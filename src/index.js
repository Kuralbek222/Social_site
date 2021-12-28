import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {subscribe} from './store/state'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let reRenderEntireTree = ()=>{
ReactDOM.render(
  <BrowserRouter>
     <App />
   </BrowserRouter>
  ,
   document.getElementById('root')
 );
}
reRenderEntireTree()
subscribe(reRenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
