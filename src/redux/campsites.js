import * as ActionTypes from './ActionTypes';

export const Campsites = (state = {
    isLoading: true,
    errMess: null,
    campsites: []
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_CAMPSITES:
        return {...state, isLoading: false, errMess: null, campsites: action.payload}; //here action.payload gets the action from ActionCreator.js line 29
        // ...state means it create a new state, and the app will render to the new state. If just state, then it will be just the same old state.
    case ActionTypes.CAMPSITES_LOADING:
        return {...state, isLoading: true, errMess: null, campsites: []};
    case ActionTypes.CAMPSITES_FAILED:
        return {...state, isLoading: false, errMess: action.payload};
    default:
        return state;
}
};