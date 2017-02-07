import React from 'react';
import actionTypes from '../actions/actionTypes'
import actionCreator from '../actions/actionCreator';

class ControlCenter extends React.Component {
    constructor(props) {
        super(props);

        this.interval = 20;

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
        return !(this.width == nextProps.width && this.width == nextProps.height && this.props.running == nextProps.running);
    }
    render() {
        return <div>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='form-inline'>
                        <label>Update every</label>
                        <input className='form-control input-sm input-with-margin' type='number' defaultValue={this.interval} onChange={this.saveInterval.bind(this)} disabled={this.props.running} min='1' /> ms<br />
                    </div>
                    <div className='btn-group btn-with-margin'>
                        <button className='btn  btn-sm btn-success' onClick={this.startGame.bind(this)} disabled={this.props.running}>Start game</button>
                        <button className='btn btn-sm btn-danger' onClick={this.stopGame.bind(this)} disabled={!this.props.running}>Stop game</button>
                        <button className='btn btn-default btn-sm' onClick={this.nextStep.bind(this)} disabled={this.props.running}>Next step</button>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='form-inline'>
                        <label>Width:</label>
                        <input className='form-control input-sm input-with-margin width-input' type='number' defaultValue={this.width} onChange={this.saveWidth.bind(this)}
                            disabled={this.props.running} min='1' />
                        <label>Height:</label>
                        <input className='form-control input-sm input-with-margin' type='number' defaultValue={this.height} onChange={this.saveHeight.bind(this)}
                            disabled={this.props.running} min='1' />
                    </div>
                    <button className='btn btn-sm btn-primary btn-with-margin' onClick={this.resetGame.bind(this)} disabled={this.props.running}>Create new game</button>
                </div>
            </div>
        </div>
    }
}

export default ControlCenter;
