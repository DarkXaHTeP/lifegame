import React from 'react';
import lifeStore from '../stores/lifeStore';
import Board from './board';
import ControlCenter from './controlCenter';

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getState();

        let { width, height } = lifeStore.getBoardSize();
        this.boardWidth = width;
        this.boardHeight = height;

        this.handleStoreChange = this.handleStoreChange.bind(this);
    }

    handleStoreChange() {
        this.setState(this.getState());
    }

    getState() {
        return {
            board: lifeStore.getBoard(),
            isGameRunning: lifeStore.isGameRunning()
        }
    }

    componentDidMount() {
        lifeStore.on("change", this.handleStoreChange);
    }

    componentWillUnmount() {
        lifeStore.off("change", this.handleStoreChange);
    }

    render() {
        return (
            <div>
                <ControlCenter running={ this.state.isGameRunning }
                               boardWidth={ this.boardWidth }
                               boardHeight={ this.boardHeight }/>

                <div className='board-container'>
                    <Board data={ this.state.board }/>
                </div>
            </div>)
    }
}

export default Game;