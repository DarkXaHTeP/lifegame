import ReactDom from 'react-dom';
import React from 'react';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

window.React = React;

ReactDom.render(
    <App />,
    document.getElementById("container")
);