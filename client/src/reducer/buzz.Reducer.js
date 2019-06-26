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
            const morePost = state.buzzfeed.concat(...action.data)
            return {
                ...state,
                buzzfeed: morePost
            };
        }

        case "PUT_LIKE": {
            const buzzLike = state.buzzfeed.map((item) => action.data._id === item._id ? action.data : item);
            return {
                ...state,
                buzzfeed: buzzLike
            }
        }
        case "PUT_DISLIKE": {
            const buzzDisLike = state.buzzfeed.map((item) => action.data._id === item._id ? action.data : item);
            return {
                ...state,
                buzzfeed: buzzDisLike
            }
        }

        default: {
            return state;
        }
    }
}

