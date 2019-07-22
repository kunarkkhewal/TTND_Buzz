import {
    SHOW_COMPLAINT,
    UPDATE_COMPLAINT_STATUS
} from '../utils/constants'

const initialState = {
    resolveList: []
}

export default function ResolveReducer(state = initialState, action) {
    let type = action.type;

    switch (type) {
        case SHOW_COMPLAINT: {
            return {
                ...state,
                resolveList: action.data
            };
        }
        case UPDATE_COMPLAINT_STATUS: {
            const list = state.resolveList.map(element => {
                if (action.data.issueId === element.issueId) {
                    return action.data;
                } else {
                    return element;
                }
            })
            return { ...state, resolveList: list };
        }
        default: {
            return state;
        }
    }
}