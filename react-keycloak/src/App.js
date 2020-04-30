import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Welcome from './Welcome';
import Secured from './Secured';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div> 
                    <h1>Sample Demo App 1</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Public component</NavLink></li>
                        <li><NavLink to="/secured">Secured component</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Welcome} />
                        <Route path="/secured" component={Secured} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;