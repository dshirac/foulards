
import React, { Component, useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import SvgAssign from '../Components/SVG/SvgAssign.js';
import SvgDates from '../Components/SVG/SvgDates.js';
import SvgMeals from '../Components/SVG/SvgMeals.js';
import SvgToDo from '../Components/SVG/SvgToDo.js';

import './Footer.css';

const ThemeContext = React.createContext();

function Footer() {
    return (
        <div className="footer">
      
             <ul className="bottom-menu ">
                    <li className="menu-item svg-wrapper bounce-in-top">
                        <Link to={`/Components/Assignements`}><SvgAssign />Assignments</Link>
                    </li>
                    <li className="menu-item svg-wrapper bounce-in-top">                        
                        <Link to={`/Components/SpecialDates`}><SvgDates />Spacial Dates</Link>
                    </li>
                    <li className="menu-item svg-wrapper bounce-in-top">                       
                        <Link to={`/Components/Meals`}><SvgMeals />Meals</Link>
                        <ul className="sub-menu">
                            <li className="menu-item">
                                Dinner
                    </li>
                        </ul>
                    </li>
                    <li className="menu-item svg-wrapper bounce-in-top" >        
                        <Link to={`/Components/ToDo/${ThemeContext.Consumer.arguments}`}><SvgToDo /><span>ToDo</span>{<Toolbar />}</Link>
                    </li>
                </ul>

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



