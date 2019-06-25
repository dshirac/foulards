import React, { Component } from 'react';
import ThemeContext from '../state';


function ToDo() {
    return (
        <div>
            <ThemeContext.Consumer>

                {value=><div>ToDo: {value}</div>}

            </ThemeContext.Consumer>
        </div>
    )
}

export default ToDo;
