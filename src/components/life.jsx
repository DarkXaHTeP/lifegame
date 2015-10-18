import React from 'react';
import Cell from './cell.jsx';
import lifeStore from '../stores/lifeStore.js';
import actionTypes from '../actions/actionTypes'
import actionCreator from '../actions/actionCreator';

class Life extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getState();
        this.interval = 15;

        lifeStore.on("change", () => {
            this.setState(this.getState())
        });
    }

    getState() {
        return {
            board: lifeStore.getBoard(),
            isGameRunning: lifeStore.isGameRunning()
        }
    }

    startGame() {
        actionCreator.execute(actionTypes.run, this.interval);
    }

    stopGame() {
        actionCreator.execute(actionTypes.stop);
    }

    nextStep() {
        actionCreator.execute(actionTypes.nextStep);
    }

    resetGame() {
        actionCreator.execute(actionTypes.restart);
    }

    saveInterval(event) {
        this.interval = event.target.value;
    }

    render() {
        return (
            <div>
                <input type='number' defaultValue={this.interval} onChange={ this.saveInterval.bind(this) } disabled={ this.state.isGameRunning } />
                <button onClick={ this.startGame.bind(this) } disabled={ this.state.isGameRunning }>Start game</button>
                <button onClick={ this.stopGame.bind(this) } disabled={ !this.state.isGameRunning }>Stop game</button>
                <button onClick={ this.nextStep.bind(this) } disabled={ this.state.isGameRunning }>Next step</button>
                <button onClick={ this.resetGame.bind(this) } disabled={ this.state.isGameRunning }>Reset game</button>
                <div className='game-board'>{
                    this.state.board.map((cellsRow, rowIndex) => {
                        return <div key={ rowIndex } className='game-row'>{
                            cellsRow.map((cell) => {
                                return <Cell key={ cell.id } data={cell}/>
                            })
                        }</div>
                    })
                }</div>
            </div>)
    }
}

export default Life;