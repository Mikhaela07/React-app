import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";




const App = (props) => {
    
        return ( 
        <BrowserRouter>
            <div className = 'app-wrapper' >
            
            <Header/>
            
            <Navbar /> 
           
            <div className="app-wrapper-content"> 
            <Route  path="/Profile" render={()=><Profile ppage={props.State.ppage}  
            dispatch={props.dispatch} />}></Route>
            <Route path="/dialogs"  render={()=><Dialogs state={props.State.dpage} 
            dispatch={props.dispatch} store={props.store}/>}></Route>
            
            </div>
            </div>
        </BrowserRouter>);

        }

export default App;