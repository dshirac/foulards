
import React, { Component, useState, useEffect, useContext } from 'react';
import './Footer.css';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Assignements from '../Components/Assignements.js';
import SpecialDates from '../Components/SpecialDates.js';
import Meals from '../Components/Meals/Meals.js';
import ToDo from '../Components/ToDo.js';

import SvgProfile from '../Components/SVG/SvgProfile.js'
import SvgAssign from '../Components/SVG/SvgAssign.js';
import SvgDates from '../Components/SVG/SvgDates.js';
import SvgMeals from '../Components/SVG/SvgMeals.js';
import SvgToDo from '../Components/SVG/SvgToDo.js';

const ThemeContext = React.createContext();

function Footer() {
    return (
        <div className="menu">
            <Router>
                <Route path='/Components/Assignements' component={Assignements} />
                <Route path='/Components/SpecialDates' component={SpecialDates} />
                <Route path='/Components/Meals' component={Meals} />
                <Route path='/Components/ToDo/:id' component={ToDo} />

                    <ul className="bottom-menu ">
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
                            <Link to={`/Components/ToDo/ ${ThemeContext.value}`}>ToDo{<Toolbar />}</Link>

                        </li>
                    </ul>
                <div className="footer"></div>
            </Router>

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


export default Footer;



