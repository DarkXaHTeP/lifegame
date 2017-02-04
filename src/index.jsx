import ReactDom from 'react-dom';
import React from 'react';
import App from './components/app';
import './styles.css';

window.React = React;

ReactDom.render(
    <App />,
    document.getElementById("container")
);