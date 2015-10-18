import React from 'react';
import Cell from './cell.jsx';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='game-board'>{
                this.props.data.map((cellsRow, rowIndex) => {
                    return <div key={ rowIndex } className='game-row'>{
                        cellsRow.map((cell) => {
                            return <Cell key={ cell.id } data={cell}/>
                        })
                    }</div>
                })
            }</div>
        )
    }
}

export default Board;