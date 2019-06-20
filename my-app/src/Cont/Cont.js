import React, { Component, useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Assignements from '../Components/Assignements';
import SpecialDates from '../Components/SpecialDates.js';
import Meals from '../Components/Meals/Meals.js';
import ToDo from '../Components/ToDo.js';



import './Cont.css';
import '../Footer/Footer.js';

const ThemeContext = React.createContext();

function Cont() {
    return (
        <div className="wrapper">
                <div className="content">
                    <Route path='/Components/Assignements' component={Assignements} />
                    <Route path='/Components/SpecialDates' component={SpecialDates} />
                    <Route path='/Components/Meals' component={Meals} />
                    <Route path='/Components/ToDo/:id' component={ToDo} />
                </div>
                


        </div>
    ) //return
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


export default Cont;