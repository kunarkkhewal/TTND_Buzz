import {combineReducers} from 'redux';
import UserReducer from './user.Reducer'
import BuzzReducer from './buzz.Reducer'
import ComplaintReducer from './complaint.Reducer'

const rootReducer = combineReducers({UserReducer, BuzzReducer, ComplaintReducer})

export default rootReducer;