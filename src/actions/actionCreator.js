import dispatcher from '../dispatcher';
import actionTypes from './actionTypes';

class ActionCreator {
    dispatch(type, data) {
        dispatcher.emit('action', { actionType: type, data: data });
    }
}

export default new ActionCreator();