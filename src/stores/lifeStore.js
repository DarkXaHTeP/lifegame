import actionTypes from '../actions/actionTypes';
import EventEmitter from 'events';
import dispatcher from '../dispatcher';

const defaultGameBoardWidth = 50;
const defaultGameBoardHeight = 40;

class LifeStore {
    constructor() {
        this._width = defaultGameBoardWidth;
        this._height = defaultGameBoardHeight;
        this._eventEmitter = new EventEmitter;
        this._world = new GameOfLife.World(this._height, this._width);
        dispatcher.on('action', this.processAction.bind(this));

        setInterval(function() {
            this._world.tick();
            this._eventEmitter.emit('change');
        }.bind(this), 100);
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

    on(eventName, callback) {
        this._eventEmitter.on(eventName, callback);
    }

    processAction(actionType, data) {
        let actionHandler = this._actionHandlers[actionType];
        if(actionHandler != null) {
            actionHandler(data);
        }
    }
}

export default new LifeStore();