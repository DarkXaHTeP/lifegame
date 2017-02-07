import ReactDom from 'react-dom';
import React from 'react';
import App from './components/app';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';

window.React = React;

ReactDom.render(
    <App />,
    document.getElementById("container")
);