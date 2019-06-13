
import React, { Component, useState, useEffect, useContext } from 'react';
import './Header.css';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


import MyFamily from '../Components/MyFamily/MyFamily';
import MyFamilyLogin from '../Components/MyFamily/Login.js';
import MyFamilySettings from '../Components/MyFamily/Settings.js';

import SvgProfile from '../Components/SVG/SvgProfile.js'

const ThemeContext = React.createContext();

function Header() {
    return (
        <div className="header">
            <ThemeContext.Provider value="Shira" >
                <Router>
                    <Route exact={true} path='/' component={MyFamily} />
                    <Route path='/Components/MyFamily/Login' component={MyFamilyLogin} />
                    <Route path='/Components/MyFamily/Settings' component={MyFamilySettings} />

                        <ul className="top-menu ">
                            <li className="menu-item">
                                <SvgProfile />
                            </li>
                            <li className="menu-item logo">
                                <Link to={`/`}>myFamily</Link><span>Hello <Toolbar /></span>
                            </li>
                            <li className="menu-item">
                                <Link to={`Components/MyFamily/Login`}>Login</Link>
                            </li>
                            <li className="menu-item">
                                <Link to={`Components/MyFamily/Settings`}>Settings</Link>
                            </li>
                        </ul>

                        <div className="header-child ">
                            <div className="my-family-photo"></div>
                        </div>
                </Router>



                {/* <nav>
	<ul>
        <li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li>
			<a href="#">Portfolio</a>

			<ul>
				<li>
					<a href="#">Projects</a>
					
					<ul>
						<li><a href="#">Personal</a></li>
						<li><a href="#">Sub-menu too long for one line</a></li>
					</ul>
				</li>
				<li><a href="#">Employment</a></li>
			</ul>
		</li>
		<li><a href="#">Contact</a></li>
	</ul>
</nav> */}

            </ThemeContext.Provider>
        </div>
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


export default Header;

