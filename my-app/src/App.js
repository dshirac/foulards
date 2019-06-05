import React, { Component, useState, useEffect, useContext } from 'react';
//import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';

import MyFamily from './Components/MyFamily/MyFamily';
import MyFamilyLogin from './Components/MyFamily/Login.js';
import MyFamilySettings from './Components/MyFamily/Settings.js';
import Assignements from './Components/Assignements.js';
import SpecialDates from './Components/SpecialDates.js';
import Meals from './Components/Meals/Meals.js';
import ToDo from './Components/ToDo.js'; 

import SvgProfile from './Components/SVG/SvgProfile.js'
import SvgAssign from './Components/SVG/SvgAssign.js';
import SvgDates from './Components/SVG/SvgDates.js';
import SvgMeals from './Components/SVG/SvgMeals.js';
import SvgToDo from './Components/SVG/SvgToDo.js';



const ThemeContext = React.createContext('light');


function App() {

  return (
    <ThemeContext.Provider  value="light" >
    

    <Router>

    <div className="App">

      <div className="grid">

        <ul className="top-menu menu">
          <li className="menu-item logo">
            <Link to={`/`}>myFamily</Link><span className='simple-text-wrapper'>Hello <Toolbar theme='light' /></span>
           <ul className="sub-menu visible">
              <li className="menu-item" >
                <SvgProfile />
                <Link to={`Components/MyFamily/Login`}>Login</Link></li>
              <li className="menu-item">
                <Link to={`Components/MyFamily/Settings`}>Settings</Link></li>
            </ul>
        </li>
        </ul>

        <div className="header">
          <div className="header-child ">
            <div className="my-family-photo"></div>
          </div>
        </div>

        <div className="content">
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
            <SvgAssign />
            <Link to={`/Components/Assignements`}>Assignments</Link>
          </li>
          <li className="menu-item svg-wrapper">
            <SvgDates />
            <Link to={`/Components/SpecialDates`}>Spacial Dates</Link>
          </li>
          <li className="menu-item svg-wrapper">
            <SvgMeals />
            <Link to={`/Components/Meals`}>Meals</Link>
              <ul className="sub-menu">
                <li className="menu-item">
                  Dinner
                </li>
              </ul>    
          </li>
          <li className="menu-item svg-wrapper" >
            <SvgToDo />
            <Link to={'/Components/ToDo/'}>ToDo</Link>
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

</ThemeContext.Provider>
); //return


} //app 

// A component in the middle doesn't have to
// pass the theme down explicitly anymore.
function Toolbar(props) {
  return (
        <ThemedButton theme={props.theme} />
  );
}

function ThemedButton(props) {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".
  // let contextType = ThemeContext;
  const theme = useContext(ThemeContext);

  return <Button theme={props.theme} />;
}

class Button extends React.Component {
  // Assign a contextType to read the current theme context.
  // React will find the closest theme Provider above and use its value.
  // In this example, the current theme is "dark".

  render() {
      return <span className={` ${this.props.theme}`}>{this.props.theme}</span>;
  }
}

export default App;