import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import news from './news';
import events from './events';
import feed from './feed';

const reducer = combineReducers({
    news,
    events,
    feed
})

export default createStore (
    reducer,
    applyMiddleware(thunk)
)