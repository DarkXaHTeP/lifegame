import React from 'react';

class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        return this.props.data.alive !== nextProps.data.alive;
    }

    render() {
        return <span className={ this.props.data.alive ? 'game-cell alive' : 'game-cell' }></span>
    }
}

export default Cell;