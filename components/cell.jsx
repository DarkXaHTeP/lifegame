import React from 'react';

class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <span className='game-cell'></span>
    }
}

export default Cell;