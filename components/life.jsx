import React from 'react';

import Cell from './cell.jsx';

class Life extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cells: [[ 1, 2], [1, 2]]
        };
    }

    render() {
        return (
            <div className='game'>{
            this.state.cells.map(function (cellsRow) {
                return <div className='game-row'>{
                    cellsRow.map(function (cell) {
                        return <Cell data={cell}/>
                    })
                }</div>
            })
            }</div>)
    }
}

export default Life;