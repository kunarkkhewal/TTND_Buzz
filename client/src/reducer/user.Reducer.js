import { SHOW_USER } from '../utils/constants'

const initialState = {
    userData: [{ username: '', role: '' }]
}

export default function userReducer(state = initialState, action) {
    let type = action.type;

    switch (type) {
        case SHOW_USER: {
            return {
                ...state,
                userData: [action.data]
            };
        }
        default: {
            return state;
        }
    }
}