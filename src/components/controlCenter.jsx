import React from 'react';
import actionTypes from '../actions/actionTypes'
import actionCreator from '../actions/actionCreator';
import { FormControl, ControlLabel, ButtonGroup, Button, Col, Row } from 'react-bootstrap';

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
            <Row>
                <Col xs={6}>
                    <div className='form-inline'>
                        <ControlLabel>Update every</ControlLabel>
                        <FormControl bsClass='input-with-margin' type='number' defaultValue={this.interval} onChange={this.saveInterval.bind(this)} disabled={this.props.running} min='1' /> ms<br />
                    </div>
                    <ButtonGroup bsClass='btn-with-margin'>
                        <Button bsSize='small' bsStyle='success' onClick={this.startGame.bind(this)} disabled={this.props.running}>Start game</Button>
                        <Button bsSize='small' bsStyle='danger' onClick={this.stopGame.bind(this)} disabled={!this.props.running}>Stop game</Button>
                        <Button bsSize='small' onClick={this.nextStep.bind(this)} disabled={this.props.running}>Next step</Button>
                    </ButtonGroup>
                </Col>
                <Col xs={6}>
                    <div className='form-inline'>
                        <ControlLabel>Width:</ControlLabel>
                        <FormControl bsClass='input-with-margin width-input' type='number' defaultValue={this.width} onChange={this.saveWidth.bind(this)}
                            disabled={this.props.running} min='1' />

                        <ControlLabel>Height:</ControlLabel>
                        <FormControl bsClass='input-with-margin' type='number' defaultValue={this.height} onChange={this.saveHeight.bind(this)}
                            disabled={this.props.running} min='1' />
                    </div>
                    <ButtonGroup bsClass='btn-with-margin'>
                        <Button bsSize='small' bsStyle='primary' onClick={this.resetGame.bind(this)} disabled={this.props.running}>Create new game</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </div>
    }
}

export default ControlCenter;
