
import React, { Component, useState, useEffect, useContext } from 'react';
import ThemeContext from './state'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import './icon-animation.css';

import Header from './Header/Header.js';
import Cont from './Cont/Cont.js'; 
import Footer from './Footer/Footer.js';



function App() {

  return (
    <ThemeContext.Provider value="Shira" >
      <Router>
        <div className="App">

          <div className="grid">
            <Header />
            <Cont />
            <Footer />
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
    //return <span className={` ${this.props.theme}`}>{this.props.theme}</span>;
    return <ThemeContext.Consumer>
      {value => <span>{value}</span>}
    </ThemeContext.Consumer>
  }
}

export default App;