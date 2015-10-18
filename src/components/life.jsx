import React from 'react';
import Cell from './cell.jsx';
import lifeStore from '../stores/lifeStore.js';

class Life extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: lifeStore.getBoard()
        };

        lifeStore.on("change", function() {
            this.setState({
                board: lifeStore.getBoard()
            })
        }.bind(this));
    }

    render() {
        return (
            <div className='game-board'>{
            this.state.board.map(function (cellsRow, rowIndex) {
                return <div key={ rowIndex } className='game-row'>{
                    cellsRow.map(function (cell) {
                        return <Cell key={ cell.id } data={cell}/>
                    })
                }</div>
            })
            }</div>)
    }
}

export default Life;