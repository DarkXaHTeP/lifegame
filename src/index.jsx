import ReactDom from 'react-dom';
import React from 'react';
import Life from './components/life.jsx';

window.React = React;

ReactDom.render(
    <Life />,
    document.getElementById("container")
);