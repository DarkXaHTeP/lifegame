import React from 'react';

class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <span className={ this.props.data.alive ? 'game-cell alive' : 'game-cell' }></span>
    }
}

export default Cell;