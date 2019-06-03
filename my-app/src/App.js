 import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import MyFamily from './Components/MyFamily/MyFamily';
import MyFamilyLogin from './Components/MyFamily/Login.js';
import MyFamilySettings from './Components/MyFamily/Settings.js';
import Assignements from './Components/Assignements.js';
import SpecialDates from './Components/SpecialDates.js';
import Meals from './Components/Meals/Meals.js';
import ToDo from './Components/ToDo.js'; 

import './App.css';

function App() {

  return (

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
            <Route path='/Components/ToDo' component={ToDo}/>
          </div> {/* END: content */}

          <ul className="bottom-menu menu">
          <li className="menu-item svg-wrapper">
          {<svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"></path>
						</svg>}

              <Link to={`/Components/Assignements`}>Assignments</Link>
            </li>
            <li className="menu-item svg-wrapper">
              <div class="icon">*</div>
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
              <Link to={`/Components/ToDo`}>ToDo</Link>
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