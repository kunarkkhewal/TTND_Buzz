import {
    ADD_COMPLAINT,
    SHOW_COMPLAINT
} from '../utils/constants'

const initialState = {
    complaintList: []
}

export default function complaintReducer(state= initialState, action){
    let type = action.type;

    switch(type){
        case ADD_COMPLAINT: {
            return {
                ...state,
                complaintList:[action.data, ...state.complaintList]
            };
        }
        case SHOW_COMPLAINT: {
            return {
                ...state,
                complaintList: action.data
            };
        }
        default: {
            return state;
        }
    }
}