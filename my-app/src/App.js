 import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

//import context from './path';

import MyFamily from './Components/MyFamily/MyFamily';
import MyFamilyLogin from './Components/MyFamily/Login.js';
import MyFamilySettings from './Components/MyFamily/Settings.js';
import Assignements from './Components/Assignements.js';
import SpecialDates from './Components/SpecialDates.js';
import Meals from './Components/Meals/Meals.js';
import ToDo from './Components/ToDo.js'; 
import SvgMeals from './Components/SVG/SvgMeals.js'

import './App.css';

function App() {

  return (
/*
1st-context.provider

*/ 
   <Router>

      <div classNameName="App">

        <div className="grid">

          <ul className="top-menu menu">
            <li className="menu-item logo">
              <Link to={`/`}>myFamily</Link>
             { <ul className="sub-menu">
                <li className="menu-item">
                  <Link to={`Components/MyFamily/Login`}>Login</Link></li>
                <li className="menu-item">
                  <Link to={`Components/MyFamily/Settings`}>Settings</Link></li>
              </ul>}
           </li>
          </ul>

          <div className="header">
            <div className="header-child ">
              <div className="my-family-photo"></div>
            </div>
          </div>

          <div className="content">
            <h1>Hello</h1>
            <Route exact={true} path='/' component={MyFamily}/> 
            <Route path='/Components/MyFamily/Login' component={MyFamilyLogin}/> 
            <Route path='/Components/MyFamily/Settings' component={MyFamilySettings}/> 
            <Route path='/Components/Assignements' component={Assignements}/>
            <Route path='/Components/SpecialDates' component={SpecialDates}/>
            <Route path='/Components/Meals' component={Meals}/>
            <Route path='/Components/ToDo/:id' component={ToDo}/>
          </div> {/* END: content */}

          <ul className="bottom-menu menu">
          <li className="menu-item svg-wrapper">
           <SvgMeals />

              <Link to={`/Components/Assignements`}>Assignments</Link>
            </li>
            <li className="menu-item svg-wrapper">
            <SvgMeals />
              <Link to={`/Components/SpecialDates`}>Spacial Dates</Link>
            </li>
            <li className="menu-item svg-wrapper">
              <Link to={`/Components/Meals`}>Meals</Link>
                <ul className="sub-menu">
                  <li className="menu-item">
                    Dinner
                  </li>
                </ul>    
            </li>
            <li className="menu-item svg-wrapper">
              <div class="icon">*</div>
              <Link to={'/Components/ToDo/{x}'}>ToDo</Link>
            </li>
          </ul>


          <div className="footer">{/* ON MOBILE:
            <p>FOOTER Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
              cumque iste necessitatibus quasi, sapiente eos quod eligendi inventore eius nisi
              culpa error suscipit vel alias nostrum provident assumenda. Inventore, eum.</p >
           */}</div>
        </div> {/* END: grid */}
      </div> {/* END:app */}  
       
    </Router>
  )
}

export default App;