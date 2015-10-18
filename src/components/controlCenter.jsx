import React from 'react';
import actionTypes from '../actions/actionTypes'
import actionCreator from '../actions/actionCreator';

class ControlCenter extends React.Component {
    constructor(props) {
        super(props);

        this.interval = 15;

        this.width = props.boardWidth;
        this.height = props.boardHeight;
    }

    startGame() {
        actionCreator.dispatch(actionTypes.run, this.interval);
    }

    stopGame() {
        actionCreator.dispatch(actionTypes.stop);
    }

    nextStep() {
        actionCreator.dispatch(actionTypes.nextStep);
    }

    resetGame() {
        actionCreator.dispatch(actionTypes.restart, {
            width: this.width,
            height: this.height
        });
    }

    saveInterval(event) {
        this.interval = event.target.value;
    }

    saveWidth(event) {
        this.width = event.target.value;
    }

    saveHeight(event) {
        this.height = event.target.value;
    }

    shouldComponentUpdate(nextProps) {
        return !(this.width == nextProps.width && this.width== nextProps.height && this.props.running == nextProps.running);
    }
    render() {
        return <div className='controls'>
            Update every <input type='number' defaultValue={this.interval} onChange={ this.saveInterval.bind(this) } disabled={ this.props.running } min='1'/> ms<br />
            <button onClick={ this.startGame.bind(this) } disabled={ this.props.running }>Start game</button>
            <button onClick={ this.stopGame.bind(this) } disabled={ !this.props.running }>Stop game</button>
            <button onClick={ this.nextStep.bind(this) } disabled={ this.props.running }>Next step</button>
            <hr />
            Width: <input type='number' defaultValue={this.width} onChange={ this.saveWidth.bind(this) }
                   disabled={ this.props.running } min='1'/><br />
            Height: <input type='number' defaultValue={this.height} onChange={ this.saveHeight.bind(this) }
                   disabled={ this.props.running } min='1'/><br />
            <button onClick={ this.resetGame.bind(this) } disabled={ this.props.running }>Create new game</button>
                <hr />
        </div>
    }
}

export default ControlCenter;