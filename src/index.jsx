import ReactDom from 'react-dom';
import React from 'react';
import App from './components/app';

window.React = React;

ReactDom.render(
    <App />,
    document.getElementById("container")
);