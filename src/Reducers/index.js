import { combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import BlogReducers from './BlogReducer';
import AuthReducers from './AuthReducers';

// combined reducer to give a global state
const rootReducer = combineReducers({
    blogs:BlogReducers,
    users: AuthReducers
});
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(
    rootReducer
);

export default store;