import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import SideBar from "./components/Layout/SideBar";
import style from './App.module.css';
import Home from "./components/pages/Home/Home";

function App() {
   return (
      <div style={{display: 'flex'}} className={style.appBack}>
         <BrowserRouter>
            <SideBar/>
            <div className={style.content}>
               <div className={style.toolbar}/>
               <Switch>
                  <Route exact path={'/'} render={() => <Redirect to={'/home'}/>}/>
                  <Route exact path={'/home'} component={Home}/>
               </Switch>
            </div>
         </BrowserRouter>
      </div>
   );
}

export default App;
