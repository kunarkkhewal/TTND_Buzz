const initialState = {
    buzzfeed: []
}

export default function buzzReducer(state = initialState, action) {
    let type = action.type;

    switch (type) {
        case "BUZZ_FEED": {
            return {
                ...state,
                buzzfeed: [action.data, ...state.buzzfeed]
            };
        }
        default: {
            return state;
        }
    }
}

