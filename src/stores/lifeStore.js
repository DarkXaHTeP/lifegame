import actionTypes from '../actions/actionTypes';
import EventEmitter from 'events';
import dispatcher from '../dispatcher';
import { World } from 'game-of-life-es6';

const defaultGameBoardWidth = 90;
const defaultGameBoardHeight = 60;

class LifeStore {
    constructor() {
        this._width = defaultGameBoardWidth;
        this._height = defaultGameBoardHeight;
        this._isGameRunning = false;

        this._eventEmitter = new EventEmitter;
        this._world = new World(this._height, this._width);
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
            this.emitChange();
        }, updateInterval);
        this.emitChange();
    }

    handleStopGame() {
        this._isGameRunning = false;
        clearInterval(this.interval);
        this.emitChange();
    }

    handleNextStep() {
        this._world.tick();
        this.emitChange();
    }

    handleRestart({ width, height }) {
        this._width = width;
        this._height = height;

        this._world = new World(this._height, this._width);
        this.emitChange();
    }

    on(eventName, callback) {
        this._eventEmitter.on(eventName, callback);
    }

    off(eventName, callback) {
        this._eventEmitter.removeListener(eventName, callback);
    }

    emitChange() {
        this._eventEmitter.emit('change');
    }

    processAction({ actionType, data }) {
        let actionHandler = this._actionHandlers[actionType];
        if(actionHandler != null) {
            actionHandler(data);
        }
    }
}

export default new LifeStore();