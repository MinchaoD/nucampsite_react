import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errMess: null, comments: []}, action) => {  //here state = ... is the initial state, which is a default if there is no other new data
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
        //...state means take all the old state and the new state together, if just use state, that means only the current state, doesn't include all the old state. So use ...state to take all the old and current/new state together 
        case ActionTypes.ADD_COMMENT:
            // this is match with the actioncreator line 82
            const comment = action.payload;
           
            return {...state, comments: state.comments.concat(comment)};
            //here concat can be replaced by push, if use push, it will be the undefined, because it is to add a comment, but won't modify the original state and return a new array. There is time we might want to use push but
            // not concat, when we want to add a comment but not to update the original state and return a new object, then we use push, it will return the same original state.
        //check all the above these types if has changes, if no change, then just return the same state, and will just do nothing. These match the ones in configureStore.js
        // the 2nd parameter comments: state.comments..... is the change we make to the ...state
        default:
            return state;
    }
};