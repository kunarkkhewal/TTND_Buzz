import {combineReducers} from 'redux';
import BuzzReducer from './buzz.Reducer'
import ComplaintReducer from './complaint.Reducer'

const rootReducer = combineReducers({BuzzReducer, ComplaintReducer})

export default rootReducer;