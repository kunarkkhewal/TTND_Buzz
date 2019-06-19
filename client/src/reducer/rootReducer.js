import {combineReducers} from 'redux';
import UserReducer from './user.Reducer';
import BuzzReducer from './buzz.Reducer';
import ComplaintReducer from './complaint.Reducer';
import ResolveReducer from './resolve.Reducer';

const rootReducer = combineReducers({UserReducer, BuzzReducer, ComplaintReducer, ResolveReducer})

export default rootReducer;