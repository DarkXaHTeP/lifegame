import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Redirect } from 'react-router';
import Game from './game'
import About from './about';

function App() {
    return (
        <Router history={hashHistory}>
            
            <Route path='/game' component={Game} />
            <Route path='/about' component={About} />
            <Redirect from='*' to='/game' />
        </Router>
    )
}

export default App;
