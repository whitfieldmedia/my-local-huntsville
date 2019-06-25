import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import events from './events';
import feed from './feed';

const reducer = combineReducers({
    events,
    feed
})

export default createStore (
    reducer,
    applyMiddleware(thunk)
)