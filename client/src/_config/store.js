
import { createStore, applyMiddleware, combineReducers  } from 'redux';
import reduxThunk from 'redux-thunk'

import userReducer from '../_reducer/user.reducer';

const rootReducer = combineReducers({
    user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;