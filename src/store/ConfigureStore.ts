import { createStore /*, applyMiddleware */ } from 'redux';
// import thunk from 'redux-thunk';
// const composeWithDevTools: Function = require('redux-devtools-extension').composeWithDevTools;

import rootReducer from '../reducers/RootReducer';

const configureStore = () => {
    const store = createStore(
        rootReducer
        // ,
        // composeWithDevTools(
        //     applyMiddleware(thunk)
        // )
    );

    return store;
};

export default configureStore;