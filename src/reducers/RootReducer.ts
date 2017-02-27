import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
// import games from './games';

export default combineReducers({
    form: formReducer
});