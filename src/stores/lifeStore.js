import actionTypes from '../actions/actionTypes';
import EventEmitter from 'events';
import dispatcher from '../dispatcher';

const defaultGameBoardWidth = 50;
const defaultGameBoardHeight = 40;
const defaultUpdateInterval = 15;

class LifeStore {
    constructor() {
        this._width = defaultGameBoardWidth;
        this._height = defaultGameBoardHeight;
        this._isGameRunning = false;

        this._eventEmitter = new EventEmitter;
        this._world = new GameOfLife.World(this._height, this._width);
        dispatcher.on('action', this.processAction.bind(this));

        this._actionHandlers = {
            [actionTypes.run]: this.handleStartGame.bind(this),
            [actionTypes.stop]: this.handleStopGame.bind(this),
            [actionTypes.nextStep]: this.handleNextStep.bind(this),
            [actionTypes.restart]: this.handleRestart.bind(this)
        }
    }

    getBoard() {
        let board = [];

        for(let i = 1; i <= this._height; i++) {
            let row = [];

            for(let j = 1; j <= this._width; j++) {
                let coordinate = this._world.getCoordinateAt(i, j);
                row.push({
                    id: i * this._height + j,
                    alive: coordinate.hasLiveCell()
                })
            }

            board.push(row);
        }

        return board;
    }

    getBoardSize() {
        return {
            width: this._width,
            height: this._height
        }
    }

    isGameRunning() {
        return this._isGameRunning;
    }

    getUpdateInterval() {
        return this._updateInterval;
    }

    handleStartGame(updateInterval) {
        this._isGameRunning = true;

        clearInterval(this.interval);
        this.interval = setInterval(() => {
            this._world.tick();
            this._eventEmitter.emit('change');
        }, updateInterval);
    }

    handleStopGame() {
        this._isGameRunning = false;
        clearInterval(this.interval);
        this._eventEmitter.emit('change');
    }

    handleNextStep() {
        this._world.tick();
        this._eventEmitter.emit('change');
    }

    handleRestart() {
        this._world = new GameOfLife.World(this._height, this._width);
        this._eventEmitter.emit('change');
    }

    on(eventName, callback) {
        this._eventEmitter.on(eventName, callback);
    }

    processAction({ actionType, data }) {
        let actionHandler = this._actionHandlers[actionType];
        if(actionHandler != null) {
            actionHandler(data);
        }
    }
}

export default new LifeStore();