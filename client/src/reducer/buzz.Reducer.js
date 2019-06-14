const initialState = {
    buzzfeed: []
}

export default function buzzReducer(state = initialState, action) {
    let type = action.type;

    switch (type) {
        case "ADD_BUZZ": {
            return {
                ...state,
                buzzfeed: [action.data, ...state.buzzfeed]
            };
        }

        case "SHOW_BUZZ": {
            return {
                ...state,
                buzzfeed: action.data
            };
        }

        default: {
            return state;
        }
    }
}

