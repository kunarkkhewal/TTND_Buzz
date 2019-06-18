import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/rootReducer'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log("Store has changed", store.getState());
});

export default store;